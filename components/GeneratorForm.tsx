import React, { useState, useMemo } from 'react';
import { POSES, HAIRSTYLES, MAKEUP_STYLES, ANGLES, THEMES, RATIOS, REFERENCE_MODES } from '../constants';
import SelectionButton from './SelectionButton';
import { Copy, Terminal } from 'lucide-react';

const GeneratorForm: React.FC = () => {
  const [selectedPose, setSelectedPose] = useState<string>('squatting-supermarket');
  const [selectedHairstyle, setSelectedHairstyle] = useState<string>('korean-long');
  const [selectedMakeup, setSelectedMakeup] = useState<string>('idol');
  const [selectedAngles, setSelectedAngles] = useState<string[]>(['knee-up']);
  const [selectedTheme, setSelectedTheme] = useState<string>('supermarket');
  const [selectedRatio, setSelectedRatio] = useState<string>('3:4');
  const [selectedRefMode, setSelectedRefMode] = useState<string>('ref-female');

  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);
  
  const toggleAngle = (id: string) => {
    setSelectedAngles(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; 
        return prev.filter(a => a !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const finalPrompt = useMemo(() => {
    const pose = POSES.find(p => p.id === selectedPose)?.value || '';
    const hairstyle = HAIRSTYLES.find(h => h.id === selectedHairstyle)?.value || '';
    const makeup = MAKEUP_STYLES.find(m => m.id === selectedMakeup)?.value || '';
    const angles = selectedAngles.map(id => ANGLES.find(a => a.id === id)?.value).join(', ');
    const theme = THEMES.find(t => t.id === selectedTheme)?.value || '';
    const refMode = REFERENCE_MODES.find(m => m.id === selectedRefMode)?.value || '';
    const ratio = RATIOS.find(r => r.id === selectedRatio)?.value || '';
    
    // Check if user selected Full Body
    const isFullBody = selectedAngles.includes('full-body');

    // Add strong instruction to force full body generation
    const fullBodyInstruction = isFullBody 
      ? " ***IMPORTANT: GENERATE A FULL BODY SHOT FROM HEAD TO TOE. You MUST extrapolate and generate the rest of the body, outfit, legs, and SHOES. Do not just make a portrait. The image must show the character standing from shoes to head.*** " 
      : "";

    // Base description
    const baseDescription = "Create a highly realistic portrait.";

    // Use selected makeup, unless it's male mode where we override it
    let makeupAndFeatures = makeup;
    
    // Adjust makeup/features if Male is selected (Overrides the makeup selection)
    if (selectedRefMode === 'ref-male') {
      makeupAndFeatures = "Natural masculine skin texture, detailed skin pores, handsome face, sharp jawline, clear skin, soft lighting, manly appearance.";
    }

    // Negative prompts to prevent bad quality
    const negativePrompt = "blur, blurry, low quality, pixelated, noise, grain, jpeg artifacts, plastic skin, cartoon, illustration, deformed, low resolution, bad anatomy, bad hands, text, watermark, logo";

    return `${baseDescription}, ${refMode}, Hairstyle: ${hairstyle}, ${makeupAndFeatures}, ${theme}, ${pose}, camera angles: [${angles}], ${fullBodyInstruction}, Aspect Ratio: ${ratio}, soft lighting, detailed skin texture, trending on social media, high resolution, 8k, masterpiece.
    
    (Negative prompt: ${negativePrompt})`;
  }, [selectedPose, selectedHairstyle, selectedMakeup, selectedAngles, selectedTheme, selectedRefMode, selectedRatio]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div className="max-w-md md:max-w-2xl mx-auto p-4 md:p-6 transition-all duration-300">
      
      {/* 0. Reference Mode Section */}
      <section className="mb-8 animate-fade-in-up">
        <h2 className="text-pink-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-pink-100 p-1 rounded-md">0</span> 
          เลือกบุคคลหรือเพศ (Character/Gender)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
      <section className="mb-8">
        <h2 className="text-purple-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
           <span className="bg-purple-100 p-1 rounded-md">1</span>
           เลือกท่าทาง (POSE)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
      <section className="mb-8">
        <h2 className="text-rose-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
           <span className="bg-rose-100 p-1 rounded-md">2</span>
           ทรงผม (HAIRSTYLE)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
      <section className="mb-8">
        <h2 className="text-rose-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
           <span className="bg-rose-100 p-1 rounded-md">2.1</span>
           สไตล์การแต่งหน้า (MAKEUP STYLE)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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
      <section className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <h2 className="text-indigo-600/80 font-bold uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
            <span className="bg-indigo-100 p-1 rounded-md">3</span>
            มุมกล้อง (CAMERA ANGLE)
          </h2>
          <span className="bg-white/50 backdrop-blur-sm text-indigo-500 text-xs px-2 py-1 rounded-full font-medium border border-indigo-100">
            Multi-select
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
      <section className="mb-8">
        <h2 className="text-blue-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-blue-100 p-1 rounded-md">4</span>
          สไตล์/เทศกาล (THEME)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
      <section className="mb-8">
        <h2 className="text-teal-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-teal-100 p-1 rounded-md">5</span>
          ขนาด (RATIO)
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

      {/* 6. Prompt Result Section */}
      <section className="mb-8 animate-fade-in">
         <h2 className="text-gray-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
            <span className="bg-gray-200 p-1 rounded-md text-gray-600">6</span>
            PROMPT RESULT (โค้ดคำสั่งที่ได้)
        </h2>
        <div className="bg-slate-900 text-slate-50 p-6 rounded-3xl shadow-xl font-mono text-sm leading-relaxed overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-400 flex items-center gap-1">
                   <Terminal size={10} /> prompt.txt
                </span>
            </div>
            <div className="mt-4 whitespace-pre-wrap break-words opacity-90 h-60 overflow-y-auto pr-2 custom-scrollbar">
                {finalPrompt}
            </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl sticky bottom-4 z-30">
        <div className="flex flex-col gap-3">
           <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-pink-500/40 hover:scale-[1.01] transition-all active:scale-95"
          >
            {copyFeedback ? (
                <>
                    <span className="text-white">คัดลอกสำเร็จ! (Copied!)</span>
                </>
            ) : (
                <>
                    <Copy className="w-6 h-6" />
                    คัดลอก Prompt (Copy)
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;