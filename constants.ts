import { Option } from './types';

export const POSES: Option[] = [
  { id: 'peace', label: 'ชูสองนิ้ว (Peace V)', value: 'Peace V sign hand gesture, smiling' },
  { id: 'cheek-heart', label: 'หัวใจแก้ม (Cheek Heart)', value: 'Cheek Heart pose, hands on cheeks forming heart' },
  { id: 'finger-heart', label: 'มินิฮาร์ท (Finger Heart)', value: 'Finger Heart gesture, cute smile' },
  { id: 'flower', label: 'เท้าคางดอกไม้ (Flower)', value: 'Flower pose, hands under chin like a flower' },
  { id: 'cat-paws', label: 'หูแมว (Cat Paws)', value: 'Cat Paws gesture, hands curled like paws near face' },
  { id: 'wink', label: 'ขยิบตาแลบลิ้น (Wink)', value: 'Winking eye and sticking tongue out playfully' },
  { id: 'pouting', label: 'ปากจู๋ (Pouting)', value: 'Pouting lips, cute angry face' },
  { id: 'mirror-selfie', label: 'ถือโทรศัพท์ (Mirror Selfie)', value: 'taking a Mirror Selfie, holding phone' },
  { id: 'candid', label: 'เผลอๆ (Candid)', value: 'Candid shot, looking away naturally' },
  { id: 'shy-laugh', label: 'ปิดปากหัวเราะ (Shy Laugh)', value: 'Shy Laugh, covering mouth with hand' },
  { id: 'adjust-hair', label: 'จับผม (Adjusting Hair)', value: 'Adjusting hair, tucking hair behind ear' },
  { id: 'chin-rest', label: 'เท้าคาง (Chin Rest)', value: 'Chin Rest on hand, thinking pose' },
  { id: 'shh', label: 'จุ๊ปาก (Shh!)', value: 'Shh gesture, finger on lips' },
  { id: 'head-tilt', label: 'เอียงคอ (Head Tilt)', value: 'Head Tilt, looking cute' },
  { id: 'stretching', label: 'บิดขี้เกียจ (Stretching)', value: 'Stretching arms up, relaxed' },
];

export const ANGLES: Option[] = [
  { id: 'eye-level', label: 'ระดับสายตา (Eye-Level)', value: 'camera facing directly forward, neutral perspective, clean background, natural proportions' },
  { id: 'high-angle', label: 'มุมสูง (High Angle)', value: 'High-angle shot looking down at (subject), wide-frame, soft shadows, subtle perspective distortion.' },
  { id: 'low-angle', label: 'มุมต่ำ (Low Angle)', value: 'Low-angle shot capturing (subject) from below, emphasizing height and presence, dramatic perspective.' },
  { id: 'birds-eye', label: 'มุมท็อป (Bird\'s Eye)', value: 'Top-down bird s-eye view of (subject), perfectly vertical angle, clear geometry, balanced composition.' },
  { id: 'worms-eye', label: 'มุมเสย (Worm\'s Eye)', value: 'Worm s-eye view from ground level, camera extremely low, dramatic upward perspective toward (subject).' },
  { id: '45-degree', label: 'มุม 45 องศา', value: 'Three-quarter 45-degree angle shot of (subject), natural perspective, subtle depth, soft lighting.' },
  { id: 'close-up', label: 'โคลสอัพ (Close-Up)', value: 'Close-up shot of (subject), sharp details, shallow depth of field, blurred background.' },
  { id: 'extreme-cu', label: 'เจาะลึก (Extreme CU)', value: 'Extreme close-up of (specific detail), high texture clarity, ultra shallow depth, crisp focus.' },
  { id: 'medium-shot', label: 'ครึ่งตัว (Medium Shot)', value: 'Medium shot of (subject) from waist up, centered composition, soft key light' },
  { id: 'full-body', label: 'เต็มตัว (Full Body)', value: 'Full-body shot of (subject), wide frame, balanced background, realistic proportions.' },
  { id: 'dutch-angle', label: 'มุมเอียง (Dutch Angle)', value: 'Dutch-angle tilted shot of (subject), dynamic framing, cinematic tension.' },
  { id: 'ots', label: 'ข้ามไหล่ (OTS)', value: 'Over-the-shoulder shot, camera behind one shoulder of (subject), focus on point of interest ahead.' },
  { id: 'pov', label: 'มุมมองบุคคล (POV)', value: 'POV shot as seen through the eyes of (subject), immersive perspective, natural motion feeling.' },
  { id: 'wide-shot', label: 'มุมกว้าง (Wide Shot)', value: 'Wide establishing shot with (subject) in the environment, large spatial context, cinematic composition.' },
  { id: 'ultra-wide', label: 'เลนส์กว้าง (Ultra-Wide)', value: 'Ultra-wide cinematic shot of (subject), strong depth, lens distortion for dramatic scale.' },
  { id: 'tracking', label: 'กล้องตาม (Tracking)', value: 'Tracking shot following (subject) in motion, smooth dynamic movement, stable framing' },
  { id: 'dolly', label: 'ดอลลี่ (Dolly In/Out)', value: 'Dolly-in shot slowly moving toward (subject), increasing focus and tension' },
  { id: 'side-profile', label: 'ด้านข้าง (Side Profile)', value: 'Side-profile shot of (subject), clean silhouette, soft rim light.' },
];

export const THEMES: Option[] = [
  { id: 'christmas', label: 'คริสต์มาส (Christmas)', value: 'Christmas theme, festive lights, red and green outfit, snow' },
  { id: 'new-year', label: 'ปีใหม่ (New Year)', value: 'New Year celebration, fireworks background, party dress' },
  { id: 'songkran', label: 'สงกรานต์ (Songkran)', value: 'Songkran festival, water gun, floral shirt, wet hair' },
  { id: 'halloween', label: 'ฮาโลวีน (Halloween)', value: 'Halloween costume, spooky cute atmosphere, pumpkin' },
  { id: 'cafe', label: 'คาเฟ่ (Cafe Hopping)', value: 'Minimalist Cafe, holding coffee cup, aesthetic soft lighting' },
  { id: 'y2k', label: 'ห้องนอน Y2K (My Room)', value: 'Y2K bedroom aesthetic, retro vibes, cluttered cute room' },
  { id: 'rooftop', label: 'ดาดฟ้า (Sunset Rooftop)', value: 'Sunset Rooftop, golden hour lighting, city skyline background' },
  { id: 'floral', label: 'สวนดอกไม้ (Floral Dream)', value: 'Floral Garden, blooming flowers, dreamy atmosphere' },
  { id: 'night-flash', label: 'สตรีทกลางคืน (Night Flash)', value: 'Night Street photography, direct flash, high contrast, city night' },
];

export const RATIOS: Option[] = [
  { id: '9:16', label: '9:16 (Story/TikTok)', value: '9:16' },
  { id: '3:4', label: '3:4 (Portrait)', value: '3:4' },
  { id: '1:1', label: '1:1 (Square)', value: '1:1' },
  { id: '16:9', label: '16:9 (Landscape)', value: '16:9' },
];