export const categories = [
  { key: 'all', label: 'Tất cả', icon: '✨' },
  { key: 'folder', label: 'Folder', icon: '📂' },
  { key: 'flyer', label: 'Tờ rơi', icon: '📄' },
  { key: 'paper_bag', label: 'Túi giấy', icon: '🛍️' },
  { key: 'brochure', label: 'Brochure', icon: '📚' },
  { key: 'voucher', label: 'Voucher', icon: '🎟️' },
  { key: 'name_card', label: 'Name card', icon: '💳' },
  { key: 'envelope', label: 'Bao thư', icon: '✉️' },
];

export const products = [
  {
    id: 1,
    name: 'Folder A4 doanh nghiệp cao cấp',
    category: 'folder',
    shortDescription:
      'Folder A4 in offset 4 màu, bìa cứng C300gsm, cán mờ, khe cắm name card.',
    description:
      'Folder A4 kích thước chuẩn 22 x 31 cm, sử dụng giấy Couche 300gsm, in offset 4 màu, cán mờ 2 mặt, bế khuôn, ép kim logo (tuỳ chọn). Phù hợp đựng hồ sơ, proposal, catalogue khi gặp khách hàng.',
    minPrice: '500.000đ',
    paper: 'C300gsm',
    finish: 'Cán mờ, bế khuôn, khe name card',
    size: '22 x 31 cm (A4)',
    image: '/images/folder.webp',
  },
  {
    id: 2,
    name: 'Tờ rơi khuyến mãi khổ A5',
    category: 'flyer',
    shortDescription:
      'Tờ rơi A5 in 2 mặt, giấy C150gsm, phù hợp phát trực tiếp & cài tại quầy.',
    description:
      'Tờ rơi khổ A5, in 2 mặt trên giấy Couche 150gsm, màu sắc tươi sáng, phù hợp cho các chương trình khuyến mãi, khai trương, giới thiệu dịch vụ.',
    minPrice: '250.000đ',
    paper: 'C150gsm',
    finish: 'Cán bóng (tuỳ chọn)',
    size: 'A5 (14,8 x 21 cm)',
    image: '/images/toroi.jpg',
  },
  {
    id: 3,
    name: 'Túi giấy thời trang trung',
    category: 'paper_bag',
    shortDescription:
      'Túi giấy in logo thương hiệu, quai giấy xoắn, thích hợp cho shop thời trang.',
    description:
      'Túi giấy kích thước trung, dùng giấy Kraft hoặc Bristol 250–300gsm, in offset 1–4 màu, cán mờ/bóng, dán đáy chắc chắn, quai giấy xoắn hoặc dây dù.',
    minPrice: '1.200.000đ',
    paper: 'Bristol 250–300gsm',
    finish: 'Cán mờ, quai giấy xoắn',
    size: '24 x 30 x 10 cm',
    image: '/images/tui-giay.jpg',
  },
  {
    id: 4,
    name: 'Brochure gấp 3 – 6 mặt nội dung',
    category: 'brochure',
    shortDescription:
      'Brochure gấp 3, trình bày thông tin dịch vụ/giải pháp rõ ràng, chuyên nghiệp.',
    description:
      'Brochure 6 mặt (gấp 3), in offset trên giấy Couche 150–200gsm, phù hợp giới thiệu công ty, dịch vụ, bảng giá. Layout hiện đại, dễ đọc.',
    minPrice: '750.000đ',
    paper: 'C150–200gsm',
    finish: 'Cán mờ/bóng 1 hoặc 2 mặt',
    size: '21 x 29,7 cm gấp 3',
    image: '/images/brochure.webp',
  },
  {
    id: 5,
    name: 'Voucher giảm giá sang trọng',
    category: 'voucher',
    shortDescription:
      'Voucher in trên giấy dày, có chỗ bế số, phù hợp spa, nhà hàng, thời trang.',
    description:
      'Voucher in trên giấy dày 250–300gsm, có thể ép kim, ép nhũ, bế số hoặc đóng số nhảy để kiểm soát. Tạo cảm giác premium cho chương trình khuyến mãi.',
    minPrice: '380.000đ',
    paper: 'C250–300gsm',
    finish: 'Ép kim/ép nhũ (tuỳ chọn)',
    size: '18 x 8 cm (tham khảo)',
    image: '/images/voucher.jpg',
  },
  {
    id: 6,
    name: 'Name card cán mờ bo góc',
    category: 'name_card',
    shortDescription:
      'Name card 2 mặt, giấy C350gsm, cán mờ, bo góc nhẹ tạo cảm giác cao cấp.',
    description:
      'Name card sử dụng giấy Couche 350gsm, in 2 mặt, cán mờ, bo góc 3mm. Màu sắc chuẩn thương hiệu, chữ sắc nét.',
    minPrice: '260.000đ',
    paper: 'C350gsm',
    finish: 'Cán mờ, bo góc',
    size: '9 x 5,4 cm',
    image: '/images/name-card2.jpeg',
  },
  {
    id: 7,
    name: 'Bao thư khổ DL in logo',
    category: 'envelope',
    shortDescription:
      'Bao thư DL (10 x 22 cm), in logo & thông tin công ty, phù hợp gửi công văn.',
    description:
      'Bao thư DL, giấy Offset 100–120gsm, in 1–4 màu. Phù hợp cho công văn, thư mời, hoá đơn. Có thể dán keo bóc dính hoặc keo liền.',
    minPrice: '320.000đ',
    paper: 'Offset 100–120gsm',
    finish: 'In 1–4 màu',
    size: '10 x 22 cm (DL)',
    image: '/images/baothu.jpg',
  },
];
