# 🎮 Hành Trình Tri Thức: Xây Dựng Tương Lai

## 📖 Giới Thiệu

"Hành Trình Tri Thức: Xây Dựng Tương Lai" là một trò chơi trắc nghiệm tương tác giáo dục về Công nghiệp hóa, Hiện đại hóa và Kinh tế Tri thức. Người chơi sẽ "xây dựng" một quốc gia từ giai đoạn nông nghiệp cơ bản, trải qua công nghiệp hóa và vươn tới kinh tế tri thức.

## 🎯 Mục Tiêu

Trả lời đúng 10 câu hỏi để xây dựng thành công một quốc gia hiện đại, phát triển dựa trên tri thức. Điểm số cuối cùng được thể hiện bằng mức độ phát triển của thành phố/quốc gia mà người chơi xây được.

## ✨ Tính Năng Chính

### 1. Hệ Thống Trắc Nghiệm Tương Tác
- 10 câu hỏi về CNH, HĐH và KTTT
- Mỗi câu có 4 lựa chọn (A, B, C, D)
- Phản hồi ngay lập tức sau mỗi câu trả lời
- Giải thích chi tiết cho mỗi câu hỏi

### 2. Hình Ảnh Phát Triển Động
- Thành phố phát triển theo điểm số:
  - **0-2 điểm**: game1.png - Giai đoạn nông nghiệp
  - **3-4 điểm**: game2.png - Bắt đầu công nghiệp hóa
  - **5-6 điểm**: game3.png - Công nghiệp phát triển
  - **7-8 điểm**: game4.png - Công nghệ cao
  - **9-10 điểm**: game5.png - Thành phố thông minh

### 3. Hệ Thống Xây Dựng
Mỗi câu trả lời đúng "mở khóa" một công trình:
- Câu 1: Nhà máy đầu tiên
- Câu 2: Trường học
- Câu 3: Viện nghiên cứu
- Câu 4: Thư viện công nghệ
- Câu 5: Trường Đại học
- Câu 6: Nâng cấp Đại học
- Câu 7: Trung tâm Dữ liệu
- Câu 8: Tòa nhà Công nghệ Cao
- Câu 9: Công viên Công nghệ
- Câu 10: Thành phố Thông minh

### 4. Bảng Xếp Hạng
- **Lưu trữ cục bộ**: Sử dụng localStorage để lưu thành tích
- **Top 10 người chơi**: Hiển thị 10 người chơi xuất sắc nhất
- **Xếp hạng theo**:
  1. Điểm số (cao -> thấp)
  2. Thời gian hoàn thành (nhanh -> chậm) nếu cùng điểm
- **Thông tin hiển thị**:
  - Tên người chơi
  - Điểm số (x/10)
  - Thời gian hoàn thành
  - Ngày chơi
  - Huy chương (vàng/bạc/đồng cho top 3)

## 🎮 Cách Chơi

### Bước 1: Màn Hình Bắt Đầu
1. Nhập tên của bạn
2. Nhấn "Bắt đầu Sứ Mệnh!"
3. Hoặc xem "Bảng Xếp Hạng"

### Bước 2: Chơi Game
1. Đọc câu hỏi
2. Chọn một trong 4 đáp án
3. Nhấn "Xác nhận"
4. Xem kết quả và giải thích
5. Nhấn "Câu tiếp theo"
6. Quan sát thành phố phát triển!

### Bước 3: Kết Thúc
1. Xem điểm số và thành phố cuối cùng
2. Thành tích được tự động lưu vào bảng xếp hạng
3. Chọn "Chơi lại" hoặc "Xem Bảng Xếp Hạng"

## 💾 Lưu Trữ Dữ Liệu

### LocalStorage
Game sử dụng `localStorage` để lưu bảng xếp hạng:

```javascript
// Key: gameLeaderboard
// Format: Array<{name, score, date, time}>
localStorage.setItem('gameLeaderboard', JSON.stringify(leaderboard));
```

### Cấu Trúc Dữ Liệu

```typescript
interface LeaderboardEntry {
  name: string;        // Tên người chơi
  score: number;       // Điểm số (0-10)
  date: string;        // Ngày chơi (định dạng vi-VN)
  time: number;        // Thời gian (giây)
}
```

## 🎨 Thiết Kế UI/UX

### Màu Sắc Chủ Đạo
- **Background**: Gradient xanh đậm (#1a1a2e → #0f3460 → #16213e)
- **Primary**: Gradient tím (#667eea → #764ba2)
- **Success**: Xanh ngọc (#4ecdc4)
- **Warning**: Cam vàng (#ffc371)
- **Error**: Đỏ (#ff6b6b)

### Hiệu Ứng
- **Animations**: fadeInUp, float, bounce, slideIn, buildingUnlock
- **Transitions**: Smooth 0.3s ease
- **Backdrop Blur**: 10px cho các card
- **Box Shadows**: 0 10px 40px rgba(0, 0, 0, 0.3)

### Responsive Design
- Desktop: Grid 2 cột (city + questions)
- Tablet: Grid 1 cột
- Mobile: Optimized layout với font size nhỏ hơn

## 📁 Cấu Trúc File

```
src/pages/game/
├── index.tsx          # Component chính
└── index.scss         # Styling

public/img/
├── game1.png          # Giai đoạn nông nghiệp
├── game2.png          # Bắt đầu CNH
├── game3.png          # Công nghiệp phát triển
├── game4.png          # Công nghệ cao
└── game5.png          # Thành phố thông minh
```

## 🔧 Cài Đặt và Chạy

### 1. Đảm bảo các file hình ảnh
Đặt 5 file hình ảnh (game1.png - game5.png) vào folder `public/img/`

### 2. Route đã được cấu hình
```tsx
// App.tsx
<Route path="/game" element={<Game />} />
```

### 3. Truy cập game
Mở trình duyệt và truy cập:
```
http://localhost:5173/game
```

### 4. Hoặc từ trang chủ
Nhấn vào menu "Trò Chơi" trong Header

## 🎓 Nội Dung Giáo Dục

### 10 Câu Hỏi Về:

1. **Khái niệm CNH, HĐH**
2. **Kinh tế Tri thức**
3. **Mối quan hệ CNH-HĐH-KTTT**
4. **Tư tưởng C. Mác**
5. **Tư tưởng Hồ Chí Minh về học tập**
6. **Giáo dục là quốc sách hàng đầu**
7. **Đại hội XII Đảng CSVN**
8. **"Đi tắt, đón đầu" CMCN 4.0**
9. **Sự nghiệp của toàn dân**
10. **Ý nghĩa phát triển nhanh, bền vững**

## 🏆 Tiêu Chí Đánh Giá

### Điểm Số
- **10/10**: Xuất sắc - Thành phố thông minh rực rỡ
- **7-9/10**: Rất tốt - Thành phố công nghệ cao
- **5-6/10**: Khá tốt - Thành phố công nghiệp trung bình
- **3-4/10**: Đủ - Giai đoạn đầu CNH
- **0-2/10**: Cần cố gắng - Vẫn ở giai đoạn nông nghiệp

### Bảng Xếp Hạng
- Top 1: Huy chương Vàng 🥇
- Top 2: Huy chương Bạc 🥈
- Top 3: Huy chương Đồng 🥉
- Top 4-10: Huy chương danh dự 🏅

## 🚀 Tính Năng Tương Lai (Có Thể Mở Rộng)

### 1. Âm Thanh
- Nhạc nền (background music)
- Hiệu ứng âm thanh khi đúng/sai
- Âm thanh xây dựng công trình

### 2. Multiplayer
- Thi đấu online với bạn bè
- Bảng xếp hạng toàn cầu
- Phòng chơi riêng tư

### 3. Chế Độ Khó
- Giới hạn thời gian cho mỗi câu
- Câu hỏi ngẫu nhiên từ pool lớn hơn
- Chế độ sống còn (1 lỗi là thua)

### 4. Thành Tích
- Hệ thống badges
- Achievements
- Streak (chuỗi ngày chơi liên tục)

### 5. Social Features
- Chia sẻ kết quả lên mạng xã hội
- Challenge bạn bè
- Bình luận và đánh giá

## 🛠️ Technical Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: SCSS với animations
- **Router**: React Router DOM 7
- **Icons**: React Icons
- **Storage**: localStorage
- **Build**: Vite

## 📝 Đáp Án Chính Xác

1. B - Chuyển đổi toàn diện, căn bản...
2. B - Nền kinh tế trong đó tri thức là yếu tố quyết định...
3. B - CNH, HĐH là nền tảng vật chất; KTTT là động lực...
4. B - Tri thức
5. B - Tầm quan trọng của học tập, tri thức...
6. B - Giáo dục và phát triển con người
7. C - "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức"
8. B - "Đi tắt, đón đầu" trong cách mạng công nghiệp 4.0...
9. B - Công nghiệp hóa phải là "sự nghiệp của toàn dân"...
10. B - Là con đường tất yếu để phát triển nhanh, bền vững...

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Xóa cache trình duyệt
2. Kiểm tra console để xem lỗi
3. Đảm bảo tất cả hình ảnh đã được đặt đúng vị trí
4. Khởi động lại dev server

## 📄 License

Dự án giáo dục về CNH, HĐH và Kinh Tế Tri Thức Việt Nam - 2025

---

**Chúc bạn chơi game vui vẻ và học tập hiệu quả! 🎓🚀**

