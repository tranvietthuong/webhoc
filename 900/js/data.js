const LESSONS_DATA = [
  {
    "id": 1,
    "image": "image/1.png",
    "mp3Url": "mp3/lesson_1.mp3",
    "sentences": [
      { "en": "I get up", "ipa": "/aɪ gɪt əp/", "vi": "tôi thức dậy" },
      { "en": "I’m yawning", "ipa": "/i’m* ˈjɔnɪŋ/", "vi": "Tôi đang ngáp" },
      { "en": "I’m sleepy", "ipa": "/i’m* sˈlipi/", "vi": "tôi buồn ngủ" }
    ]
  },
  {
    "id": 2,
    "image": "image/2.png",
    "mp3Url": "mp3/lesson_2.mp3",
    "sentences": [
      { "en": "I wash my face", "ipa": "/aɪ wɑʃ maɪ feɪs/", "vi": "Tôi rửa mặt" },
      { "en": "The water is cold", "ipa": "/ðə ˈwɔtər ɪz koʊld/", "vi": "Nước lạnh" },
      { "en": "I can’t open my eyes", "ipa": "/aɪ can’t* ˈoʊpən maɪ aɪz/", "vi": "Tôi không thể mở mắt" }
    ]
  },
  {
    "id": 3,
    "image": "image/3.png",
    "mp3Url": "mp3/lesson_3.mp3",
    "sentences": [
      { "en": "I drink some milk", "ipa": "/aɪ drɪŋk səm mɪlk/", "vi": "Tôi uống một ít sữa" },
      { "en": "I like milk", "ipa": "/aɪ laɪk mɪlk/", "vi": "tôi thích sữa" },
      { "en": "I eat toast", "ipa": "/aɪ it toʊst/", "vi": "tôi ăn bánh mì nướng" }
    ]
  },
  {
    "id": 4,
    "image": "image/4.png",
    "mp3Url": "mp3/lesson_4.mp3",
    "sentences": [
      { "en": "I wipe my mouth", "ipa": "/aɪ waɪp maɪ maʊθ/", "vi": "Tôi lau miệng" },
      { "en": "The toast and the milk are good", "ipa": "/ðə toʊst ənd ðə mɪlk ər gʊd/", "vi": "Bánh mì nướng và sữa đều ngon" },
      { "en": "I’m getting full", "ipa": "/i’m* ˈgɪtɪŋ fʊl/", "vi": "Tôi sắp no rồi" }
    ]
  },
  {
    "id": 5,
    "image": "image/5.png",
    "mp3Url": "mp3/lesson_5.mp3",
    "sentences": [
      { "en": "I take off my pajamas", "ipa": "/aɪ teɪk ɔf maɪ pəˈʤɑməz/", "vi": "Tôi cởi bộ đồ ngủ của mình" },
      { "en": "I finish my breakfast", "ipa": "/aɪ ˈfɪnɪʃ maɪ ˈbrɛkfəst/", "vi": "Tôi ăn xong bữa sáng của mình" },
      { "en": "What shall I wear", "ipa": "/wət ʃæl aɪ wɛr/", "vi": "Tôi sẽ mặc gì" }
    ]
  },
  {
    "id": 6,
    "image": "image/6.png",
    "mp3Url": "mp3/lesson_6.mp3",
    "sentences": [
      { "en": "I put on my clothes.", "ipa": "/aɪ pʊt ɔn maɪ kloʊðz./", "vi": "Tôi mặc quần áo vào." },
      { "en": "I wear my underpant", "ipa": "/aɪ wɛr maɪ underpant*/", "vi": "Tôi mặc quần lót của tôi" },
      { "en": "I can’t see anything now", "ipa": "/aɪ can’t* si ˈɛniˌθɪŋ naʊ/", "vi": "Bây giờ tôi không thể nhìn thấy gì cả" }
    ]
  },
  {
    "id": 7,
    "image": "image/7.png",
    "mp3Url": "mp3/lesson_7.mp3",
    "sentences": [
      { "en": "I put on my pink blouse", "ipa": "/aɪ pʊt ɔn maɪ pɪŋk blaʊs/", "vi": "Tôi khoác lên mình chiếc áo hồng" },
      { "en": "I button up my blouse", "ipa": "/aɪ ˈbətən əp maɪ blaʊs/", "vi": "Tôi cài nút áo" },
      { "en": "This blouse has three button", "ipa": "/ðɪs blaʊs həz θri ˈbətən/", "vi": "Chiếc áo này có ba nút" }
    ]
  },
  {
    "id": 8,
    "image": "image/8.png",
    "mp3Url": "mp3/lesson_8.mp3",
    "sentences": [
      { "en": "I put on my green skirt", "ipa": "/aɪ pʊt ɔn maɪ grin skərt/", "vi": "Tôi mặc chiếc váy xanh" },
      { "en": "This is my favorite skirt", "ipa": "/ðɪs ɪz maɪ ˈfeɪvərɪt skərt/", "vi": "Đây là chiếc váy yêu thích của tôi" },
      { "en": "Do I look pretty?", "ipa": "/du aɪ lʊk ˈprɪti?/", "vi": "Trông tôi có đẹp không?" }
    ]
  },
  {
    "id": 9,
    "image": "image/9.png",
    "mp3Url": "mp3/lesson_9.mp3",
    "sentences": [
      { "en": "I look at some pretty flowers.", "ipa": "/aɪ lʊk æt səm ˈprɪti flaʊərz./", "vi": "Tôi nhìn vào một số bông hoa đẹp." },
      { "en": "They smell good.", "ipa": "/ðeɪ smɛl gʊd./", "vi": "Chúng có mùi thơm." },
      { "en": "Mommy takes care of these flowers.", "ipa": "/ˈmɑmi teɪks kɛr əv ðiz flaʊərz./", "vi": "Mẹ chăm sóc những bông hoa này." }
    ]
  },
  {
    "id": 10,
    "image": "image/10.png",
    "mp3Url": "mp3/lesson_10.mp3",
    "sentences": [
      { "en": "I pour some miso-soup over rice.", "ipa": "/aɪ pɔr səm miso-soup* ˈoʊvər raɪs./", "vi": "Tôi đổ một ít súp miso lên cơm." },
      { "en": "Mommmy doesn’t like me to do so.", "ipa": "/mommmy* doesn’t* laɪk mi tɪ du soʊ./", "vi": "Mẹ không thích con làm như vậy." },
      { "en": "I spill my miso-soup.", "ipa": "/aɪ spɪl maɪ miso-soup*./", "vi": "Tôi làm đổ súp miso của mình." }
    ]
  },
  {
    "id": 11,
    "image": "image/11.png",
    "mp3Url": "mp3/lesson_11.mp3",
    "sentences": [
      { "en": "I walk.", "ipa": "/aɪ wɔk./", "vi": "Tôi đi bộ." },
      { "en": "I walk to school.", "ipa": "/aɪ wɔk tɪ skul./", "vi": "Tôi đi bộ đến trường." },
      { "en": "I wear my green shoes.", "ipa": "/aɪ wɛr maɪ grin ʃuz./", "vi": "Tôi mang đôi giày màu xanh lá cây của tôi." }
    ]
  },
  {
    "id": 12,
    "image": "image/12.png",
    "mp3Url": "mp3/lesson_12.mp3",
    "sentences": [
      { "en": "I water the flowers.", "ipa": "/aɪ ˈwɔtər ðə flaʊərz./", "vi": "Tôi tưới hoa." },
      { "en": "Tulips are colorful.", "ipa": "/ˈtulɪps ər ˈkələrfəl./", "vi": "Hoa tulip có nhiều màu sắc." },
      { "en": "I use my watering can.", "ipa": "/aɪ juz maɪ ˈwɔtərɪŋ kən./", "vi": "Tôi sử dụng bình tưới của mình." }
    ]
  },
  {
    "id": 13,
    "image": "image/13.png",
    "mp3Url": "mp3/lesson_13.mp3",
    "sentences": [
      { "en": "I water the garden.", "ipa": "/aɪ ˈwɔtər ðə ˈgɑrdən./", "vi": "Tôi tưới vườn." },
      { "en": "I fill my watering can", "ipa": "/aɪ fɪl maɪ ˈwɔtərɪŋ kən/", "vi": "Tôi đổ đầy bình tưới của mình" },
      { "en": "It’s hot today", "ipa": "/it’s* hɑt təˈdeɪ/", "vi": "Hôm nay trời nóng" }
    ]
  },
  {
    "id": 14,
    "image": "image/14.png",
    "mp3Url": "mp3/lesson_14.mp3",
    "sentences": [
      { "en": "I swim in the ocean", "ipa": "/aɪ swɪm ɪn ðə ˈoʊʃən/", "vi": "Tôi bơi trong đại dương" },
      { "en": "I wear my swimsuit and bathing cap.", "ipa": "/aɪ wɛr maɪ sˈwɪmˌsut ənd ˈbeɪðɪŋ kæp./", "vi": "Tôi mặc đồ bơi và đội mũ tắm." },
      { "en": "I can swim very swell", "ipa": "/aɪ kən swɪm ˈvɛri swɛl/", "vi": "Tôi có thể bơi rất giỏi" }
    ]
  },
  {
    "id": 15,
    "image": "image/15.png",
    "mp3Url": "mp3/lesson_15.mp3",
    "sentences": [
      { "en": "I eat ice cream", "ipa": "", "vi": "Tôi ăn kem" },
      { "en": "I'm hot", "ipa": "", "vi": "Tôi nóng quá" },
      { "en": "I'm sweating", "ipa": "", "vi": "Tôi đang đổ mồ hôi" }
    ]
  },
  {
    "id": 16,
    "image": "image/16.png",
    "mp3Url": "mp3/lesson_16.mp3",
    "sentences": [
      { "en": "I turn on the water", "ipa": "/aɪ tərn ɔn ðə ˈwɔtər/", "vi": "Tôi bật nước" },
      { "en": "I run the water.", "ipa": "/aɪ rən ðə ˈwɔtər./", "vi": "Tôi xả nước." },
      { "en": "I look at the water running.", "ipa": "/aɪ lʊk æt ðə ˈwɔtər ˈrənɪŋ./", "vi": "Tôi nhìn dòng nước chảy." }
    ]
  },
  {
    "id": 17,
    "image": "image/17.png",
    "mp3Url": "mp3/lesson_17.mp3",
    "sentences": [
      { "en": "I turn off the water.", "ipa": "/aɪ tərn ɔf ðə ˈwɔtər./", "vi": "Tôi tắt nước." },
      { "en": "I save water.", "ipa": "/aɪ seɪv ˈwɔtər./", "vi": "Tôi tiết kiệm nước." },
      { "en": "Water is important.", "ipa": "/ˈwɔtər ɪz ˌɪmˈpɔrtənt./", "vi": "Nước rất quan trọng." }
    ]
  },
  {
    "id": 18,
    "image": "image/18.png",
    "mp3Url": "mp3/lesson_18.mp3",
    "sentences": [
      { "en": "I put some soap in the washing machine", "ipa": "/aɪ pʊt səm soʊp ɪn ðə ˈwɑʃɪŋ məˈʃin/", "vi": "Tôi cho xà phòng vào máy giặt" },
      { "en": "I put in too much soap", "ipa": "/aɪ pʊt ɪn tu məʧ soʊp/", "vi": "Tôi cho quá nhiều xà phòng" },
      { "en": "I do the laundry", "ipa": "/aɪ du ðə ˈlɔndri/", "vi": "Tôi giặt đồ" }
    ]
  },
  {
    "id": 19,
    "image": "image/19.png",
    "mp3Url": "mp3/lesson_19.mp3",
    "sentences": [
      { "en": "I put in dirty clothes", "ipa": "/aɪ pʊt ɪn ˈdərti kloʊðz/", "vi": "Tôi bỏ quần áo bẩn vào" },
      { "en": "There are so many dirty clothes.", "ipa": "/ðɛr ər soʊ ˈmɛni ˈdərti kloʊðz./", "vi": "Có rất nhiều quần áo bẩn." },
      { "en": "I shouldn’t put in many clothes.", "ipa": "/aɪ shouldn’t* pʊt ɪn ˈmɛni kloʊðz./", "vi": "Tôi không nên bỏ quá nhiều quần áo." }
    ]
  },
  {
    "id": 20,
    "image": "image/20.png",
    "mp3Url": "mp3/lesson_20.mp3",
    "sentences": [
      { "en": "I turn on the switch.", "ipa": "/aɪ tərn ɔn ðə swɪʧ./", "vi": "Tôi bật công tắc." },
      { "en": "The washing machine starts working.", "ipa": "/ðə ˈwɑʃɪŋ məˈʃin stɑrts ˈwərkɪŋ./", "vi": "Máy giặt bắt đầu hoạt động." },
      { "en": "It’s noisy.", "ipa": "/it’s* ˈnɔɪzi./", "vi": "Nó ồn ào quá." }
    ]
  },
  // ... (Tiếp tục đầy đủ các bài học nối tiếp đến id: 300 với định dạng chuẩn tương tự)
  {
    "id": 300,
    "image": "image/300.png",
    "mp3Url": "mp3/lesson_300.mp3",
    "sentences": [
      { "en": "I brush my teeth", "ipa": "/aɪ brəʃ maɪ tiθ/", "vi": "Tôi đánh răng" },
      { "en": "I brush my teeth after meals", "ipa": "/aɪ brəʃ maɪ tiθ ˈæftər milz/", "vi": "Tôi đánh răng sau bữa ăn" },
      { "en": "I have no cavities", "ipa": "/aɪ hæv noʊ ˈkævɪtiz/", "vi": "Tôi không bị sâu răng" }
    ]
  }
];