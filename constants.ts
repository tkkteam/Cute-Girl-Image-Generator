import { Option } from './types';

export const POSES: Option[] = [
  { id: 'squatting-supermarket', label: 'นั่งยองๆ/หยิบขนม (Squatting & Snack)', value: 'She is crouching or squatting down on the floor, facing directly at the camera. Her right hand is reaching out to pick up or holding a blue and yellow snack box from the shelf.' },
  { id: 'sitting-futsal', label: 'นั่งม้าหิน/ขำตาหยี (Sitting Futsal Bench)', value: 'She sits upright on a marble table, facing the camera, laughing cheerfully with a sweet smile (smiling eyes). On the table beside her is a stylish light pink Yeti tumbler, an iPhone 16 Pro Max with a clear case, and a pink Hello Kitty portable fan.' },
  { id: 'sitting-bed', label: 'นั่งบนเตียง/ห่มผ้า (Sitting in Bed)', value: 'She is sitting on the bed leaning against the headboard, covered with a blanket, smiling cutely' },
  { id: 'braces-phone', label: 'ยิ้มเห็นเหล็ก (Braces)', value: 'She stood smiling broadly, revealing pink braces.' },
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

export const HAIRSTYLES: Option[] = [
  { id: 'long-straight', label: 'ผมยาวตรง (Long Straight)', value: 'long straight hair, silky smooth texture, natural volume, middle part' },
  { id: 'long-wavy', label: 'ผมยาวดัดลอน (Long Wavy)', value: 'long wavy hair, soft loose waves, airy volume' },
  { id: 'korean-long', label: 'ยาวสไตล์เกาหลี (Korean Style)', value: 'korean style long hair, C-curl and S-curl waves, glossy hair, face-framing layers' },
  { id: 'short-bob', label: 'บ๊อบสั้นตรง (Short Bob)', value: 'short straight bob haircut, chin-length, sleek clean edges' },
  { id: 'wavy-bob', label: 'บ๊อบดัดลอน (Wavy Bob)', value: 'wavy bob haircut, soft curls at the ends, casual chic texture' },
  { id: 'shoulder-layered', label: 'ประบ่าสไลด์ (Shoulder Layered)', value: 'shoulder-length layered haircut, feathered layers, natural volume' },
  { id: 'see-through-bangs', label: 'หน้าม้าซีทรู (See-Through Bangs)', value: 'see-through bangs, thin korean fringe, youthful look' },
  { id: 'blunt-bangs', label: 'หน้าม้าหนา (Blunt Bangs)', value: 'straight blunt bangs, thick fringe, bold fashion style' },
  { id: 'high-ponytail', label: 'หางม้าสูง (High Ponytail)', value: 'high ponytail hairstyle, sleek pulled-back hair, lifted crown' },
  { id: 'low-ponytail', label: 'หางม้าต่ำ (Low Ponytail)', value: 'low ponytail hairstyle, smooth polished elegant style' },
  { id: 'classic-bun', label: 'มวยผม (Classic Bun)', value: 'classic hair bun, neat and clean, graceful appearance' },
  { id: 'messy-bun', label: 'ดังโงะยุ่งๆ (Messy Bun)', value: 'messy bun hairstyle, loose strands, korean casual style' },
  { id: 'single-braid', label: 'เปียเดียว (Single Braid)', value: 'single braid hairstyle, neat braiding, feminine look' },
  { id: 'twin-braids', label: 'เปียคู่ (Twin Braids)', value: 'twin braids hairstyle, cute youthful symmetrical braids' },
  { id: 'boho-braid', label: 'เปียหลวม (Boho Braid)', value: 'loose bohemian braid, soft messy braiding, free-spirited style' },
  { id: 'curly', label: 'ผมหยิก (Curly)', value: 'curly hair, voluminous curls, natural bounce, textured hair' },
  { id: 'pixie', label: 'พิกซี่คัท (Pixie Cut)', value: 'pixie cut hairstyle, short cropped hair, edgy modern style' },
  { id: 'half-up', label: 'มัดครึ่งหัว (Half-Up)', value: 'half-up half-down hairstyle, soft waves, romantic trendy look' },
];

export const MAKEUP_STYLES: Option[] = [
  { id: 'idol', label: '1. แต่งหน้าสไตล์ไอดอล (Idol Style)', value: 'Idol makeup style, cheeks brushed with clear pink blush, juicy glossy lips, wearing brown contact lenses with snowflake pattern' },
  { id: 'douyin', label: '2. แต่งหน้า Douyin (Douyin Makeup)', value: 'Douyin makeup style, reddish-pink blush on cheeks and nose tip, highlighter on cheeks and nose tip, glossy reddish-pink ombre lips, soft pink eyeshadow, light brown contact lenses, long winged eyeliner, long voluminous doll-like lashes' },
  { id: 'dewy', label: '3. ปัดแก้มชมพู/ผิวฉ่ำ (Pink/Dewy)', value: 'Pink blush on cheeks, intense dewy glass skin complexion, pink-orange tone lips' },
];

export const REFERENCE_MODES: Option[] = [
  { id: 'ref-outfit', label: '1. อ้างอิงภาพ+ชุด (Keep Outfit)', value: 'Strictly keep the exact outfit and clothing from the reference image. The character must wear the same clothes as in the uploaded photo.' },
  { id: 'ref-male', label: '2. ชาย (Male Face 100%)', value: 'Generate a MALE subject. The face must be 100% identical to the man in the reference image. Masculine look. Handsome.' },
  { id: 'ref-female', label: '3. หญิง (Female Face 100%)', value: 'Generate a FEMALE subject. The face must be 100% identical to the woman in the reference image. Feminine look. Beautiful.' },
];

export const ANGLES: Option[] = [
  { id: 'eye-level', label: 'ระดับสายตา (Eye-Level)', value: 'camera facing directly forward, neutral perspective, clean background, natural proportions' },
  { id: 'Canon EOS R5', label: 'Canon EOS R5 (Canon EOS)', value: 'Canon EOS R5, 85mm f/1.2 lens, f/1.2 aperture, exceptional depth of field, moist skin, a fashion aesthetic that emphasizes exceptional detail.' },
  { id: 'knee-up', label: 'เกือบเต็มตัว (Knee-Up)', value: 'Knee-up shot (American Shot), framing from knees to head, showing most of the outfit, almost full body, balanced composition' },
  { id: 'high-angle', label: 'มุมสูง (High Angle)', value: 'High-angle shot looking down at (subject), wide-frame, soft shadows, subtle perspective distortion.' },
  { id: 'low-angle', label: 'มุมต่ำ (Low Angle)', value: 'Low-angle shot capturing (subject) from below, emphasizing height and presence, dramatic perspective.' },
  { id: 'birds-eye', label: 'มุมท็อป (Bird\'s Eye)', value: 'Top-down bird s-eye view of (subject), perfectly vertical angle, clear geometry, balanced composition.' },
  { id: 'worms-eye', label: 'มุมเสย (Worm\'s Eye)', value: 'Worm s-eye view from ground level, camera extremely low, dramatic upward perspective toward (subject).' },
  { id: '45-degree', label: 'มุม 45 องศา', value: 'Three-quarter 45-degree angle shot of (subject), natural perspective, subtle depth, soft lighting.' },
  { id: 'close-up', label: 'โคลสอัพ (Close-Up)', value: 'Close-up shot of (subject), sharp details, shallow depth of field, blurred background.' },
  { id: 'extreme-cu', label: 'เจาะลึก (Extreme CU)', value: 'Extreme close-up of (specific detail), high texture clarity, ultra shallow depth, crisp focus.' },
  { id: 'medium-shot', label: 'ครึ่งตัว (Medium Shot)', value: 'Create a medium shot image upload (framed from waist to head). Camera angle: eye-level. Composition: subject centered, balanced framing.' },
  { id: 'full-body', label: 'เต็มตัว (Full Body)', value: 'Wide Full-body shot capturing the character from HEAD TO TOE. Visible shoes, legs, and complete outfit. The framing must include the entire figure without cropping the head or feet. Distance shot.' },
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
  { id: 'supermarket', label: 'ซูเปอร์มาร์เก็ต (Supermarket)', value: 'Supermarket aisle environment. Background features fully stocked shelves with various snacks, dry foods, chocolates, biscuits, and crackers in colorful packaging. Bright supermarket lighting.' },
  { id: 'Cafe in area', label: 'คาเฟ่ในสวนร่มรื่น (Cafe in area)', value: 'A cafe in a lush garden with ornamental trees, a small waterfall, and dry ice floating on the ground. Tables are set amidst the verdant foliage. They serve large croissants with cream and fresh strawberries, and Americano coffee in a plastic cup with a straw. The sign says TatumAI Cafe' },
  { id: 'futsal-field', label: 'สนามฟุตซอล (Futsal Field)', value: 'Background is a futsal field enclosed with safety netting. Inside the field, blurred figures of men playing football. Bright spotlights illuminate the area at night, energetic atmosphere.' },
  { id: 'bedroom-night-lights', label: 'ห้องนอนมืด/ไฟประดับ (Dark Bedroom & Lights)', value: 'Modern white bedroom, modern style, dark atmosphere, pitch black room with small sparkling fairy lights decorating the room' },
  { id: 'Coffee shop', label: 'หน้าร้านกาแฟ (Coffee shop)', value: 'The cafe s facade, or rather, the flower arrangement, is in a European style, vintage, with a glass door framed in an adapted wooden design. The black glass reflects images of people and flowers, and the words "Tatatum AI" are written on it."Nature: In the lower left, a bush of pink hydrangeas is in bloom. In the back right, green vines are clinging to a light orange brick wall.' },
  { id: 'night-roadside', label: 'ริมทาง/ป้ายห้ามจอด (Night Roadside)', value: 'Nighttime roadside atmosphere, standing next to a No Parking sign, background showing beautifully trimmed bushes, direct flash photography style' },
  { id: 'christmas', label: 'คริสต์มาส (Christmas)', value: 'She wears a tight red velvet corset dress with green criss-cross laces at the front. The strapless neckline and hem are trimmed with fluffy white fur. There are green bows at the chest and waist. The skirt is flared with 2 layers, decorated with white fur bands around it. Accessories include a double-layer necklace: a red choker with a white ribbon bow in the center and a bead necklace in gradient white, green, red, decorated with cute Christmas themed pendants. Small Christmas themed stickers (like snowmen, snowflakes, Santa Claus) are stuck on her face, shoulders, and chest. She wears sparkling glittering snowflake hair clips. Festive Christmas background.' },
  { id: 'new-year', label: 'ปีใหม่ (New Year)', value: 'New Year celebration, fireworks background, party dress' },
  { id: 'songkran', label: 'สงกรานต์ (Songkran)', value: 'Songkran festival, water gun, floral shirt, wet hair' },
  { id: 'halloween', label: 'ฮาโลวีน (Halloween)', value: 'Halloween costume, spooky cute atmosphere, pumpkin' },
  { id: 'cafe', label: 'คาเฟ่ (Cafe Hopping)', value: 'Minimalist Cafe, holding coffee cup, aesthetic soft lighting' },
  { id: 'y2k', label: 'ห้องนอน Y2K (My Room)', value: 'Y2K bedroom aesthetic, retro vibes, cluttered cute room' },
  { id: 'rooftop', label: 'ดาดฟ้า (Sunset Rooftop)', value: 'Sunset Rooftop, golden hour lighting, city skyline background' },
  { id: 'floral', label: 'สวนดอกไม้ (Floral Dream)', value: 'Floral Garden, blooming flowers, dreamy atmosphere' },
  { id: 'night-flash', label: 'สตรีทกลางคืน (Night Flash)', value: 'Night Street photography, direct flash, high contrast, city night' },
  { id: 'luxury-van', label: 'รถตู้ VIP (Luxury Van)', value: 'A photorealistic portrait inside a luxury VIP van, the subject seated on a premium black leather seat. One hand rests casually on the armrest while the other lightly holds the door frame, with legs slightly crossed in an elegant, confident pose. The interior features black leather seating, a wooden floor, and a high-end ceiling design with integrated speakers and LED lighting. Soft interior lighting in white and black tones illuminates the subject, contrasted by subtle red neon lights glowing in the deep background, creating a refined nighttime atmosphere. High-contrast color grading, luxurious and clean aesthetic, sharp focus, ultra-high detail, cinematic lighting, premium VIP interior ambiance.' },
];

export const RATIOS: Option[] = [
  { id: '9:16', label: '9:16 (Story/TikTok)', value: '9:16' },
  { id: '3:4', label: '3:4 (Portrait)', value: '3:4' },
  { id: '1:1', label: '1:1 (Square)', value: '1:1' },
  { id: '16:9', label: '16:9 (Landscape)', value: '16:9' },
];