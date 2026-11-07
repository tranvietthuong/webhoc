import os
import re

# Đường dẫn đến thư mục chứa các file gom nhóm (1-10.mp3, 11-20.mp3...)
input_dir = r"D:\Webcanhan\hoctap\900\mp3"

files = [f for f in os.listdir(input_dir) if f.endswith('.mp3') and '-' in f]

def extract_start(filename):
    match = re.search(r'(\d+)-\d+', filename)
    return int(match.group(1)) if match else 0

files.sort(key=extract_start)

print(f"🚀 Tìm thấy {len(files)} file tổng. Đang tiến hành cắt file...")

for file_name in files:
    match = re.search(r'(\d+)-(\d+)', file_name)
    if not match:
        continue
    start_lesson = int(match.group(1))
    end_lesson = int(match.group(2))
    expected_count = end_lesson - start_lesson + 1

    file_path = os.path.join(input_dir, file_name)
    print(f"📂 Đang xử lý: {file_name} (Bài {start_lesson} -> {end_lesson})")
    
    try:
        with open(file_path, 'rb') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Lỗi đọc file {file_name}: {e}")
        continue

    # Chia đều dung lượng file MP3 thành số phần tương ứng với số bài trong khoảng
    chunk_size = len(content) // expected_count
    
    for i in range(expected_count):
        current_lesson = start_lesson + i
        start_byte = i * chunk_size
        # Đảm bảo bài cuối cùng lấy hết phần dư còn lại của file
        end_byte = (i + 1) * chunk_size if i < expected_count - 1 else len(content)
        
        chunk_data = content[start_byte:end_byte]
        out_filename = f"lesson_{current_lesson}.mp3"
        out_path = os.path.join(input_dir, out_filename)
        
        with open(out_path, 'wb') as out_f:
            out_f.write(chunk_data)
            
    print(f"   ✅ Đã xuất xong {expected_count} bài vào thư mục mp3.")

print("🎉 HOÀN TẤT! Đã cắt thành công toàn bộ 300 bài học.")