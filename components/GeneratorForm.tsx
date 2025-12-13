import React, { useState, useMemo } from 'react';
import { POSES, ANGLES, THEMES, RATIOS } from '../constants';
import SelectionButton from './SelectionButton';
import { Copy, Sparkles, Loader2, Image as ImageIcon, Upload, X } from 'lucide-react';
import { generateImage } from '../services/geminiService';

const GeneratorForm: React.FC = () => {
  const [selectedPose, setSelectedPose] = useState<string>('shh');
  const [selectedAngles, setSelectedAngles] = useState<string[]>(['45-degree']);
  const [selectedTheme, setSelectedTheme] = useState<string>('christmas');
  const [selectedRatio, setSelectedRatio] = useState<string>('9:16');

  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [referenceImage, setReferenceImage] = useState<string | null>(null);

  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
         setError("ขนาดไฟล์ต้องไม่เกิน 5MB (File size limit 5MB)");
         return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImage(reader.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setReferenceImage(null);
  };

  const finalPrompt = useMemo(() => {
    const pose = POSES.find(p => p.id === selectedPose)?.value || '';
    const angles = selectedAngles.map(id => ANGLES.find(a => a.id === id)?.value).join(', ');
    const theme = THEMES.find(t => t.id === selectedTheme)?.value || '';
    
    const baseDescription = customPrompt.trim() 
      ? customPrompt.trim() 
      : "Create a highly realistic portrait of (the person from the uploaded image) Photorealistic portrait of a young woman with very fair, luminous skin with a soft rosy undertone. Her hairstyle is referenced from the original image but refined to look glossy, smooth, and full of volume. She wears Douyin-style makeup: rosy pink-red blush applied to her cheeks and the tip of her nose, with a subtle highlight on the cheekbones and nose tip. Her lips are finished with glossy pink-red ombré lipstick. Soft light pink eyeshadow, light brown contact lenses, and elongated winged eyeliner enhance the charm of her eyes. Her eyelashes are long, curled, and delicately clumped for a refined, elegant look.Lighting and atmosphere resemble a photo taken with a Canon IXY/IXUS camera using a strong front-facing flash. The look evokes a Y2K digital aesthetic with Cyber Ulzzang and retro Japan–Korea vibes. The flash emits a bright white light that makes the skin appear luminous, glossy, and radiant. The image is high-resolution and sharply focused, with clear, well-defined skin texture and fine details.";
    
    return `${baseDescription}, ${theme}, ${pose}, camera angles: [${angles}]
    , soft lighting, detailed skin texture, trending on social media, high resolution, 8k, masterpiece.`;
  }, [selectedPose, selectedAngles, selectedTheme, customPrompt]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    try {
      const imageUrl = await generateImage(finalPrompt, selectedRatio, referenceImage || undefined);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError("Failed to generate image. Please try again or check your API key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md md:max-w-2xl mx-auto p-4 md:p-6 transition-all duration-300">
      
      {/* 0. Custom Input & Reference Image Section */}
      <section className="mb-8 animate-fade-in-up">
        <h2 className="text-pink-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-pink-100 p-1 rounded-md">0</span> 
          ภาพอ้างอิงและคำสั่ง (Custom & Reference)
        </h2>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* Custom Prompt Input */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-shadow">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    คำสั่งเพิ่มเติม (Main Prompt) <span className="text-xs text-pink-400 font-normal">- Optional</span>
                </label>
                <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="เช่น ผู้หญิงผมสั้นสีชมพู, ใส่แว่นตา, ชุดนักเรียนญี่ปุ่น... (พิมพ์ภาษาไทยหรืออังกฤษก็ได้)"
                    className="w-full h-40 md:h-60 p-4 rounded-2xl border-2 border-transparent bg-white/50 focus:bg-white focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none resize-none text-sm text-gray-700 transition-all duration-300"
                />
            </div>

            {/* Image Upload Input */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    ภาพอ้างอิง (Reference Image) <span className="text-xs text-pink-400 font-normal">- Optional</span>
                </label>
                <div className="flex-1">
                    {!referenceImage ? (
                        <div className="relative h-40 md:h-60 border-2 border-dashed border-pink-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50/50 transition-all cursor-pointer bg-white/30 group">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="p-4 bg-white rounded-full shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 text-pink-500">
                                <Upload className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <span className="text-sm font-medium">คลิกเพื่ออัพโหลดรูปภาพ</span>
                        </div>
                    ) : (
                        <div className="relative h-40 md:h-60 rounded-2xl overflow-hidden border-2 border-white shadow-inner bg-gray-100 group">
                            <img src={referenceImage} alt="Reference" className="w-full h-full object-contain" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            <button 
                                onClick={removeImage}
                                className="absolute top-2 right-2 bg-white/90 text-gray-700 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
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

      {/* 2. Angle Section */}
      <section className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <h2 className="text-indigo-600/80 font-bold uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
            <span className="bg-indigo-100 p-1 rounded-md">2</span>
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

      {/* 3. Theme Section */}
      <section className="mb-8">
        <h2 className="text-blue-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-blue-100 p-1 rounded-md">3</span>
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

      {/* 4. Ratio Section */}
      <section className="mb-8">
        <h2 className="text-teal-600/80 font-bold uppercase tracking-wider mb-4 text-sm md:text-base flex items-center gap-2">
          <span className="bg-teal-100 p-1 rounded-md">4</span>
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

      {/* Results Area */}
      {generatedImage && (
        <div className="mb-8 animate-fade-in flex flex-col items-center">
            <h2 className="text-gray-500 font-bold uppercase tracking-wider mb-4 text-sm md:text-base w-full text-left">
              Result
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-1 w-full transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                    src={generatedImage} 
                    alt="Generated Cute Girl" 
                    className="w-full h-auto rounded-2xl object-contain max-h-[700px]"
                />
            </div>
            <a 
                href={generatedImage} 
                download={`cute-girl-${selectedPose}-${Date.now()}.png`}
                className="mt-6 px-8 py-3 bg-white/80 backdrop-blur-md rounded-full text-pink-500 font-bold shadow-lg hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
            >
                <ImageIcon size={20} />
                Download Image
            </a>
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 bg-red-100/80 backdrop-blur-sm text-red-500 rounded-2xl text-center border border-red-200 shadow-sm font-medium">
          {error}
        </div>
      )}

      {/* Action Buttons - No longer fixed, just a nice container at the bottom */}
      <div className="mt-8 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl">
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-pink-500/40 hover:scale-[1.01] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                กำลังเสกภาพ...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                สร้างภาพ (Generate)
              </>
            )}
          </button>
          
           <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-white/50 bg-white/50 text-gray-600 font-semibold hover:bg-white hover:text-pink-500 hover:border-pink-200 transition-colors active:scale-95 backdrop-blur-sm"
          >
            {copyFeedback ? (
                <>Copied!</>
            ) : (
                <>
                    <Copy className="w-5 h-5" />
                    คัดลอก Prompt
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;