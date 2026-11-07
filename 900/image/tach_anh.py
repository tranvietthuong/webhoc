import fitz  # PyMuPDF
import os

# Tự động lấy đường dẫn tuyệt đối của thư mục chứa script
current_dir = os.path.dirname(os.path.abspath(__file__))
pdf_filename = os.path.join(current_dir, "900 mau cau giao tiep tieng anh cung con hang ngay.pdf")

if not os.path.exists(pdf_filename):
    print(f"Không tìm thấy file: {pdf_filename}")
    exit()

doc = fitz.open(pdf_filename)
img_number = 1

# Duyệt tuần tự từng trang PDF
for page_index in range(len(doc)):
    page = doc[page_index]
    image_infos = page.get_images(full=True)
    
    # Lấy danh sách ảnh kèm tọa độ dọc (Y) để sắp xếp đúng thứ tự bài học từ trên xuống dưới
    page_images = []
    for img in image_infos:
        xref = img[0]
        rects = page.get_image_rects(xref)
        if rects:
            y0 = rects[0].y0
            page_images.append((y0, xref))
    
    # Sắp xếp ảnh từ trên xuống dưới theo trang
    page_images.sort(key=lambda x: x[0])
    
    # Trích xuất và lưu file ảnh
    for y0, xref in page_images:
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        output_path = os.path.join(current_dir, f"{img_number}.{image_ext}")
        with open(output_path, "wb") as f:
            f.write(image_bytes)
            
        print(f"Đã lưu: {img_number}.{image_ext} (Bài {img_number})")
        img_number += 1
        
        if img_number > 300:
            break
            
    if img_number > 300:
        break

print(f"\nHoàn tất! Đã trích xuất thành công {img_number - 1} ảnh vào thư mục image.")