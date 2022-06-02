- [I. Document](#i-document)
- [II. Content](#ii-content)
- [1. LÀM QUEN CSS](#1-làm-quen-css)
  - [1.1. Có 3 cách cài đặt cho CSS:](#11-có-3-cách-cài-đặt-cho-css)
  - [1.2. CSS selection](#12-css-selection)
  - [1.3. Độ ưu tiên trong CSS](#13-độ-ưu-tiên-trong-css)
  - [1.4. Đặt biến trong css](#14-đặt-biến-trong-css)
  - [1.5. Đơn vị trong css (dùng nhiều)](#15-đơn-vị-trong-css-dùng-nhiều)
- [2. CSS FUNCTION](#2-css-function)
- [3. css Pseudo classes](#3-css-pseudo-classes)
- [4. Đệm, viền và khoảng lề](#4-đệm-viền-và-khoảng-lề)
  - [4.1. Thuộc tính tạo nền](#41-thuộc-tính-tạo-nền)
- [5. Thuộc tính vị trí (position)](#5-thuộc-tính-vị-trí-position)
- [6. Responsive](#6-responsive)
- [7. Quy ước đặt tên biến (clas bem)](#7-quy-ước-đặt-tên-biến-clas-bem)
  - [7.1. BEM](#71-bem)
  - [7.2. Ý nghĩa](#72-ý-nghĩa)
  - [7.3. Tại sao phài dùng BEM](#73-tại-sao-phài-dùng-bem)
  - [7.4. Cú pháp](#74-cú-pháp)
  - [7.5. Tính ứng dụng](#75-tính-ứng-dụng)
  - [7.6. Ưu điểm](#76-ưu-điểm)
  - [7.7. Nhược điểm](#77-nhược-điểm)
  - [7.8. Khi nào dùng BEM phù hợp](#78-khi-nào-dùng-bem-phù-hợp)
  - [7.9. Thực hành](#79-thực-hành)

# I. Document

[F8](https://fullstack.edu.vn/)

# II. Content

# 1. LÀM QUEN CSS

## 1.1. Có 3 cách cài đặt cho CSS:

- Internal: nội bộ
- Inline: nội tuyến
- External: bên ngoài

## 1.2. CSS selection

- CSS selectors là các cách chúng ta sử dụng để chọn ra các phần tử (elements) mà chúng ta muốn “style” cho chúng.

- ID & Class
- ID: là duy nhất -> không được được đặt trùng tên -> chỉ 1 phần tử

- Cú pháp:

```css
# <tên id>
```

- VD:

```css
#first-heading
```

- Class: khi cần css cho nhiêu thẻ html cùng 1 lúc

- Cú pháp:

```css
 . <tên class> vd:
```

- VD:

```css
.other-heading
```

## 1.3. Độ ưu tiên trong CSS

1.  Internal, External
2.  Inline - 1000
3.  #id - 100
4.  .class - 10
5.  tag - 1
6.  Equal specificity: dành cho các elements giống nhau nhưng điểm thuộc về elements mới nhất đc cập nhật
7.  Universal selection and inherited? - 0

## 1.4. Đặt biến trong css

- Tác dụng: bảo trì, sửa đổi code dễ dàng hơn
- Phải tạo ra 1 class phụ

- Cú pháp

```css
.root{
  -- <tên biến>: <giá trị>;
}
<elements>{
  <thuộc tính>: var(-- <tên biến);
}
```

- VD:

```css
:root {
  --text-color: red;
}

.text {
  color: var(--text-color);
}
```

## 1.5. Đơn vị trong css (dùng nhiều)

- Đơn vị tuyệt đối (absolute): px...
- Đơn vị tương đối (relative): %, rem, em, vw, vh...(thay đổi kích thước theo đối tượng nó phụ thuộc)

- Mặc định 100% = 16px
- %: phụ thuộc vào thẻ chứa nó
  -rem: phụ thuộc vào thẻ html (thường dùng)
- em: phụ thuộc vào thẻ gần nhất chứa nó và cùng
- vw: viewport width (chiều ngang trình duyệt)
- vh: viewport height (chiều dài trình duyệt)

# 2. CSS FUNCTION

- var()
- linear-gradient()
- rgba(): trong suốT
- rgb():
- calc(): tính toán
- atr(): thuộc tính
- url();
- css Pseudo classes
- syntax:
- selector:pseudo-class {
- property: value;
  }

```
:root: tham chiếu tới ptu gốc
:hover: kích hoạt css khi đưa chuột đến
:active: bấm chuột
:first-child: select ptu đầu
:last-child: select ptu cuối
```

# 3. css Pseudo classes

- Phần tử giả:
- Cú pháp:

```css
selector::pseudo-element {
  property: value;
}
```

# 4. Đệm, viền và khoảng lề

- padding: tăng kích thước element (theo chiều đồng hồ)
- border: tăng kích thước element (theo chiều đồng hồ)
- Margin: giống như căn lề trong word (theo chiều đồng hồ)
- box-sizing: auto tính toán để cho giống kích thước mong muốn, nhưng nếu quá lớn thì thằng này cũng bó tay :))

## 4.1. Thuộc tính tạo nền

- background-clip: chọn vùng đổ background;
- background-image:
- background-size:
- background-origin:
- background-position:

# 5. Thuộc tính vị trí (position)

- relative: tương đối, lấy chính mình làm gốc toạ độ và không phụ thuộc vào cái gì khác
- absolute: tuyệt đối,
- fixed: phụ thuộc vào khung trình duyệt
- sticky: không khuyến cáo

> **pixel nên chia hết cho 4 để tạo khoảng cách cho đẹp hơn**

# 6. Responsive

- PC:

```css
>= 1024px
```

- TABLET:

```css
>= 740px && < 1024px
```

- MOBILE:

```css
< 740px
```

> **Tối thiểu 42 - 48px thì ngón tay mới dễ dàng tương tác**

# 7. Quy ước đặt tên biến (clas bem)

## 7.1. BEM

- Là tiêu chuẩn đặt tên class khi viết CSS

## 7.2. Ý nghĩa

- Viết tắt của: Block Element Modifier
- Block: Khối
- Element: Phần tử
- Modifier: Bổ sung ý nghĩa cho `Block` hoặc `Element`

## 7.3. Tại sao phài dùng BEM

- Mỗi người đặt một kiểu
- Members đặt class trùng nhau, CSS đè lên nhau

## 7.4. Cú pháp

- .block
- .block\_\_element

- .block--modifier
- .block\_\_element--modifier

- Vd:
  - .card // block
  - .card\_\_heading // element
  - .card--error // block--modifier

## 7.5. Tính ứng dụng

- Xây dựng layout web ( bố cục)
- Xây dựng thành phần web

## 7.6. Ưu điểm

- Tái xử dụng dễ dàng
- Tính rõ dàng
- Giúp cả team làm việc với nhau ổn hơn
- Tính modul, không lo css class này ảnh hưởng đến class khác

## 7.7. Nhược điểm

- Tên class dài
- Nhiều bố cho rằng là xấu

## 7.8. Khi nào dùng BEM phù hợp

- Dự án nhiều members
- Dự án lớn, số lượng page nhiều hoặc số thành phần trên giao diện nhiều

## 7.9. Thực hành

- Làm button
- Làm message
