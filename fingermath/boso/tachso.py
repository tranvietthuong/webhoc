import cv2
import os
import numpy as np

# Lấy thư mục chứa file script hiện tại (chính là thư mục boso)
current_dir = os.path.dirname(os.path.abspath(__file__))
output_dir = current_dir
os.makedirs(output_dir, exist_ok=True)

def process_flashcard(image_filename, prefix, labels):
    image_path = os.path.join(current_dir, image_filename)
    img = cv2.imread(image_path)
    if img is None:
        print(f"Không thể đọc file {image_path}")
        return
    
    h_img, w_img, _ = img.shape
    cols, rows = 5, 2
    
    start_x = int(w_img * 0.015)
    end_x = int(w_img * 0.985)
    start_y = int(h_img * 0.02)
    end_y = int(h_img * 0.96)
    
    grid_w = end_x - start_x
    grid_h = end_y - start_y
    
    cell_w = grid_w / cols
    cell_h = grid_h / rows
    
    for idx, label in enumerate(labels):
        r = idx // cols
        c = idx % cols
        
        x1 = int(start_x + c * cell_w)
        y1 = int(start_y + r * cell_h)
        x2 = int(start_x + (c + 1) * cell_w)
        y2 = int(start_y + (r + 1) * cell_h)
        
        # Cắt bỏ phần số ở đáy (14% chiều cao cell)
        pad_x = int(cell_w * 0.06)
        pad_y = int(cell_h * 0.03)
        fx1 = max(0, x1 + pad_x)
        fy1 = max(0, y1 + pad_y)
        fx2 = min(w_img, x2 - pad_x)
        fy2 = min(h_img, y2 - int(cell_h * 0.14))
        
        card_crop = img[fy1:fy2, fx1:fx2]
        
        # Tự động gọt viền trắng thẻ, giữ lại khung bo tròn và bàn tay
        gray = cv2.cvtColor(card_crop, cv2.COLOR_BGR2GRAY)
        _, thresh = cv2.threshold(gray, 230, 255, cv2.THRESH_BINARY_INV)
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        if contours:
            main_cnt = max(contours, key=cv2.contourArea)
            bx, by, bw, bh = cv2.boundingRect(main_cnt)
            if bw > card_crop.shape[1] * 0.4 and bh > card_crop.shape[0] * 0.4:
                card_box_crop = card_crop[by:by+bh, bx:bx+bw]
            else:
                card_box_crop = card_crop
        else:
            card_box_crop = card_crop
            
        file_name = os.path.join(output_dir, f"{prefix}_{label}.webp")
        cv2.imwrite(file_name, card_box_crop, [cv2.IMWRITE_WEBP_QUALITY, 95])
        print(f"Đã cắt và lưu: {file_name}")

# 1. Cắt Tay phải: 0 đến 9
process_flashcard("tayphai.jpg", "tayphai", list(range(10)))

# 2. Cắt Tay trái: 0, 10, 20, ..., 90
process_flashcard("taytrai.jpg", "taytrai", [0, 10, 20, 30, 40, 50, 60, 70, 80, 90])

print("Hoàn tất tách 20 ảnh số chuẩn xác vào thư mục boso!")