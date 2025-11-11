# 🎬 Hướng Dẫn Thêm Video Ending Cho Game

## 📁 Chuẩn Bị Video

### 1. File Video
Bạn cần chuẩn bị một file video để phát khi kết thúc game. Video này sẽ:
- ✅ Phát **full screen** khi người chơi hoàn thành 10 câu hỏi
- ✅ Tự động phát (autoplay)
- ✅ Có thể **bỏ qua** bằng cách click vào màn hình
- ✅ Sau khi kết thúc → hiển thị kết quả + bảng xếp hạng

### 2. Yêu Cầu Video
- **Format**: MP4 (khuyến nghị)
- **Độ phân giải**: 1920x1080 hoặc cao hơn
- **Thời lượng**: 10-30 giây (khuyến nghị)
- **Kích thước**: Dưới 50MB (để tải nhanh)

---

## 📂 Cách Thêm Video Vào Project

### Bước 1: Tạo Thư Mục Video
```bash
# Trong folder public, tạo folder video
mkdir public/video
```

### Bước 2: Copy Video Vào Project
Copy file video của bạn vào `public/video/` và đổi tên thành `ending.mp4`

**Cấu trúc thư mục:**
```
D:\9HK\VRN\
├── public/
│   ├── img/
│   │   ├── game1.png
│   │   ├── game2.png
│   │   └── ...
│   └── video/
│       └── ending.mp4    ← Video của bạn ở đây!
├── src/
└── ...
```

### Bước 3: Thay Đổi Video (Nếu Muốn)
Nếu bạn muốn dùng video với tên khác hoặc format khác, cập nhật trong file:
- **File**: `src/pages/game/index.tsx`
- **Dòng**: ~604-613

```tsx
<video
  className="ending-video"
  src="/video/ending.mp4"    ← Thay đổi tên file ở đây
  autoPlay
  onEnded={handleVideoEnd}
  onClick={handleVideoEnd}
>
  <source src="/video/ending.mp4" type="video/mp4" />
  Trình duyệt của bạn không hỗ trợ video.
</video>
```

---

## 🎮 Game Flow Mới

### Trước Đây:
```
Câu hỏi 10 → [Kết thúc] → Hiển thị kết quả
```

### Bây Giờ:
```
Câu hỏi 10 → [Video Full Screen] → Hiển thị kết quả + Bảng xếp hạng
                   ↓
              (Click để bỏ qua)
```

---

## 🎯 Tính Năng Video Screen

### ✨ Tính Năng Chính:
1. **Full Screen**: Video phủ toàn màn hình
2. **Autoplay**: Tự động phát khi vào màn hình
3. **Skip**: Click vào màn hình để bỏ qua
4. **Hint**: Hiển thị text "Nhấp vào màn hình để bỏ qua" ở dưới cùng
5. **Animation**: Fade in mượt mà, hint có hiệu ứng pulse

### 🎨 Styling:
- Background: Đen (#000000)
- Video: Cover full screen
- Skip hint: Nền Navy với border xanh bright
- Animation: FadeIn + Pulse effect

---

## 🧪 Test Game

### 1. Chạy Dev Server
```bash
npm run dev
```

### 2. Vào Game
Navigate đến: `http://localhost:5173/game`

### 3. Chơi Game
- Nhập tên
- Trả lời 10 câu hỏi
- Xem video ending
- Xem kết quả + bảng xếp hạng

---

## 🔧 Troubleshooting

### ❌ Video không phát?
**Giải pháp:**
1. Kiểm tra đường dẫn file: `public/video/ending.mp4`
2. Đảm bảo format là MP4
3. Clear cache trình duyệt (Ctrl + Shift + R)
4. Kiểm tra console trong DevTools

### ❌ Video bị lag?
**Giải pháp:**
1. Nén video xuống dưới 50MB
2. Dùng codec H.264
3. Giảm độ phân giải xuống 1280x720

### ❌ Video không full screen?
**Giải pháp:**
- CSS đã được thiết lập sẵn
- Nếu vẫn lỗi, kiểm tra file `src/pages/game/index.scss` dòng 1112-1158

---

## 🎬 Gợi Ý Nội Dung Video

Một số ý tưởng cho video ending:

### 1. **Congratulations Animation**
- Text "Chúc mừng!" với hiệu ứng
- Fireworks/confetti
- Music tươi vui

### 2. **Journey Recap**
- Montage các hình ảnh từ game
- Từ nông nghiệp → công nghiệp → tri thức
- Background music cảm động

### 3. **Future Vision**
- Hình ảnh thành phố thông minh
- Công nghệ tiên tiến
- Message về tương lai

### 4. **Credits/Thank You**
- Thank you message
- Game credits
- Kêu gọi học tập thêm

---

## 📊 Technical Details

### State Management:
```tsx
type GameState = "start" | "playing" | "video" | "end" | "leaderboard";
                                        ↑
                                   New state!
```

### Flow Logic:
```tsx
handleNextQuestion() {
  // Câu cuối cùng
  if (currentQuestion === 9) {
    setGameState("video");  // ← Chuyển sang video
  }
}

handleVideoEnd() {
  setGameState("end");  // ← Sau video → kết quả
}
```

---

## 💡 Tips & Best Practices

1. **Video Length**: Giữ video ngắn (10-30s) để không gây chán
2. **File Size**: Nén video để tải nhanh
3. **Skip Option**: Luôn cho phép skip (đã implement)
4. **Sound**: Nếu video có âm thanh, đảm bảo volume phù hợp
5. **Quality**: Balance giữa chất lượng và file size

---

## 🎉 Kết Quả

Sau khi setup xong, game của bạn sẽ có:
- ✅ Video ending chuyên nghiệp
- ✅ Trải nghiệm người dùng mượt mà
- ✅ Kết quả + bảng xếp hạng sau video
- ✅ Skip option linh hoạt
- ✅ Full screen cinematic experience

**Happy Gaming! 🎮🚀**

