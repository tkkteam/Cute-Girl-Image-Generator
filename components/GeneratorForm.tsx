import React, { useState, useMemo } from 'react';
import { POSES, HAIRSTYLES, MAKEUP_STYLES, ANGLES, THEMES, RATIOS, REFERENCE_MODES } from '../constants';
import SelectionButton from './SelectionButton';
import { Copy, Terminal, CheckCircle2 } from 'lucide-react';

const GeneratorForm: React.FC = () => {
  // Initialize with empty values (no default selection)
  const [selectedPose, setSelectedPose] = useState<string>('');
  const [selectedHairstyle, setSelectedHairstyle] = useState<string>('');
  const [selectedMakeup, setSelectedMakeup] = useState<string>('');
  const [selectedAngles, setSelectedAngles] = useState<string[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedRatio, setSelectedRatio] = useState<string>('');
  const [selectedRefMode, setSelectedRefMode] = useState<string>('');
  
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);
  
  const toggleAngle = (id: string) => {
    setSelectedAngles(prev => {
      if (prev.includes(id)) {
        return prev.filter(a => a !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const finalPrompt = useMemo(() => {
    // Helper to get value
    const getVal = (options: any[], id: string) => options.find(o => o.id === id)?.value;

    const pose = getVal(POSES, selectedPose);
    const hairstyle = getVal(HAIRSTYLES, selectedHairstyle);
    const makeup = getVal(MAKEUP_STYLES, selectedMakeup);
    const theme = getVal(THEMES, selectedTheme);
    const refMode = getVal(REFERENCE_MODES, selectedRefMode);
    const ratio = getVal(RATIOS, selectedRatio);
    
    // Get Angle values
    const angleVals = selectedAngles
      .map(id => ANGLES.find(a => a.id === id)?.value)
      .filter(Boolean)
      .join(', ');

    // Build the prompt parts array to cleanly handle empty states
    const parts: string[] = [];

    parts.push("Create a highly realistic portrait.");

    if (refMode) parts.push(refMode);
    if (hairstyle) parts.push(`Hairstyle: ${hairstyle}`);

    // Logic for Makeup (Male overrides makeup selection)
    if (selectedRefMode === 'ref-male') {
      parts.push("Natural masculine skin texture, detailed skin pores, handsome face, sharp jawline, clear skin, soft lighting, manly appearance.");
    } else if (makeup) {
      parts.push(makeup);
    }

    if (theme) parts.push(theme);
    if (pose) parts.push(pose);
    if (angleVals) parts.push(`camera angles: [${angleVals}]`);

    // Check if user selected Full Body for special instruction
    const isFullBody = selectedAngles.includes('full-body');
    if (isFullBody) {
      parts.push("***IMPORTANT: GENERATE A FULL BODY SHOT FROM HEAD TO TOE. You MUST extrapolate and generate the rest of the body, outfit, legs, and SHOES. Do not just make a portrait. The image must show the character standing from shoes to head.***");
    }

    if (ratio) parts.push(`Aspect Ratio: ${ratio}`);

    // Always add quality suffixes
    parts.push("soft lighting, detailed skin texture, trending on social media, high resolution, 8k, masterpiece.");

    const fullPrompt = parts.join(', ');
    const negativePrompt = "blur, blurry, low quality, pixelated, noise, grain, jpeg artifacts, plastic skin, cartoon, illustration, deformed, low resolution, bad anatomy, bad hands, text, watermark, logo";

    return `${fullPrompt}\n\n(Negative prompt: ${negativePrompt})`;
  }, [selectedPose, selectedHairstyle, selectedMakeup, selectedAngles, selectedTheme, selectedRefMode, selectedRatio]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div className="max-w-md md:max-w-4xl mx-auto p-4 md:p-6 transition-all duration-300 relative pb-20">
      
      {/* Success Popup / Toast */}
      <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${copyFeedback ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-2 font-medium text-lg">
           <CheckCircle2 className="w-6 h-6" />
           <span>คัดลอก Prompt สำเร็จ! (Copied Successfully)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Controls */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 0. Reference Mode Section (No upload) */}
          <section>
            <h2 className="text-pink-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
              <span className="bg-pink-100 p-1 rounded-md">0</span> 
              เลือกบุคคลหรือเพศ (Character/Gender)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              {REFERENCE_MODES.map((mode) => (
                <SelectionButton
                  key={mode.id}
                  label={mode.label}
                  isSelected={selectedRefMode === mode.id}
                  onClick={() => setSelectedRefMode(mode.id)}
                />
              ))}
            </div>
          </section>

          {/* 1. Pose Section */}
          <section>
            <h2 className="text-purple-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
               <span className="bg-purple-100 p-1 rounded-md">1</span>
               เลือกท่าทาง (POSE)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {POSES.map((pose) => (
                <SelectionButton
                  key={pose.id}
                  label={pose.label}
                  isSelected={selectedPose === pose.id}
                  onClick={() => setSelectedPose(pose.id)}
                />
              ))}
            </div>
          </section>

          {/* 2. Hairstyle Section */}
          <section>
            <h2 className="text-rose-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
               <span className="bg-rose-100 p-1 rounded-md">2</span>
               ทรงผม (HAIRSTYLE)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {HAIRSTYLES.map((style) => (
                <SelectionButton
                  key={style.id}
                  label={style.label}
                  isSelected={selectedHairstyle === style.id}
                  onClick={() => setSelectedHairstyle(style.id)}
                />
              ))}
            </div>
          </section>

          {/* 2.1 Makeup Style Section */}
          <section>
            <h2 className="text-rose-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
               <span className="bg-rose-100 p-1 rounded-md">2.1</span>
               สไตล์การแต่งหน้า (MAKEUP STYLE)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {MAKEUP_STYLES.map((style) => (
                <SelectionButton
                  key={style.id}
                  label={style.label}
                  isSelected={selectedMakeup === style.id}
                  onClick={() => setSelectedMakeup(style.id)}
                />
              ))}
            </div>
          </section>

          {/* 3. Angle Section */}
          <section>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h2 className="text-indigo-600/80 font-bold uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
                <span className="bg-indigo-100 p-1 rounded-md">3</span>
                มุมกล้อง (CAMERA ANGLE)
              </h2>
              <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full border border-indigo-200">เลือกได้หลายข้อ (Multi-Select)</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {ANGLES.map((angle) => (
                <SelectionButton
                  key={angle.id}
                  label={angle.label}
                  isSelected={selectedAngles.includes(angle.id)}
                  onClick={() => toggleAngle(angle.id)}
                  isMulti
                />
              ))}
            </div>
          </section>

          {/* 4. Theme Section */}
          <section>
            <h2 className="text-teal-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
               <span className="bg-teal-100 p-1 rounded-md">4</span>
               ธีม/สถานที่ (THEME)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {THEMES.map((theme) => (
                <SelectionButton
                  key={theme.id}
                  label={theme.label}
                  isSelected={selectedTheme === theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                />
              ))}
            </div>
          </section>

          {/* 5. Ratio Section */}
          <section>
            <h2 className="text-orange-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
               <span className="bg-orange-100 p-1 rounded-md">5</span>
               สัดส่วนภาพ (ASPECT RATIO)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {RATIOS.map((ratio) => (
                <SelectionButton
                  key={ratio.id}
                  label={ratio.label}
                  isSelected={selectedRatio === ratio.id}
                  onClick={() => setSelectedRatio(ratio.id)}
                />
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Preview Only */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-24 space-y-6">
            
            {/* Prompt Display */}
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50">
              <h3 className="text-gray-700 font-bold mb-3 flex items-center gap-2">
                <Terminal size={20} className="text-pink-500"/>
                Prompt Preview
              </h3>
              <textarea
                className="w-full h-80 p-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:border-pink-300 focus:ring-0 text-sm text-gray-600 resize-none font-mono"
                value={finalPrompt}
                readOnly
              />
              
              <div className="mt-4">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-pink-300/50"
                >
                  <Copy size={18} />
                  <span>Copy Prompt</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;