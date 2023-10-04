// ice-cream options divided by character
const iceCreamByKana = {
    'あ': [
        {
            name: "飴",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249748/hiragana_game/icecream_scoops/%E9%A3%B4_sojeaq.png"
        }, {
            name: "雨",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E9%9B%A8_x9gxlh.png"
        }
    ],
    'い': [
        {
            name: "いも",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249748/hiragana_game/icecream_scoops/%E8%8A%8B_ro7inw.png"
        },
    ],
    'う': [
        {
            name: "うなぎ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%AA%E3%81%8D%E3%82%99_hejix5.png"
        },
        {
            name: "うさぎ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%95%E3%81%8D%E3%82%99_gjhohn.png"
        }
    ],
    'え': [
        {
            name: "えび",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249748/hiragana_game/icecream_scoops/%E3%81%88%E3%81%B2%E3%82%99_nozshj.png"
        },
    ],
    'お': [
        {
            name: "おにぎり",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%8A%E3%81%AB%E3%81%8D%E3%82%99%E3%82%8A_bmz814.png"
        },
    ],
    'ば': [
        {
            name: "ばあちゃん",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530522/hiragana_game/icecream_scoops/%E3%81%AF%E3%82%99%E3%81%82%E3%81%A1%E3%82%83%E3%82%93_ozogxi.png"
        },
    ],
    'び': [
        {
            name: "びよういん（美容院）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530520/hiragana_game/icecream_scoops/%E3%81%B2%E3%82%99%E3%82%88%E3%81%86%E3%81%84%E3%82%93_xbadmt.png"
        },
        {
            name: "びょういん（病院）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530520/hiragana_game/icecream_scoops/%E3%81%B2%E3%82%99%E3%82%87%E3%81%86%E3%81%84%E3%82%93_cfi5pl.png"
        },
    ],
    'ぶ': [
        {
            name: "ぶどう（葡萄）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530773/hiragana_game/icecream_scoops/%E3%81%B5%E3%82%99%E3%81%A8%E3%82%99%E3%81%86_mwrc42.png"
        },
        {
            name: "ぶた（豚）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530520/hiragana_game/icecream_scoops/%E3%81%B5%E3%82%99%E3%81%9F_xzgy0k.png"
        },
    ],
    'べ': [
        {
            name: "べんとう（弁当）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530521/hiragana_game/icecream_scoops/%E3%81%B8%E3%82%99%E3%82%93%E3%81%A8%E3%81%86_vttt0q.png"
        },
    ],
    'ぼ': [
        {
            name: "ぼうし（帽子）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687530520/hiragana_game/icecream_scoops/%E3%81%BB%E3%82%99%E3%81%86%E3%81%97_rwjxyj.png"
        },
    ],
// ぱぴぷぺぽ skipped
//     Katakana
    'ア': [
        {
            name: "アルパカ🦙 (Alpaca)",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533026/hiragana_game/icecream_scoops/%E3%82%A2%E3%83%AB%E3%83%8F%E3%82%9A%E3%82%AB_vug49a.png"
        },
        {
            name: "アップルジュース",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533026/hiragana_game/icecream_scoops/%E3%82%A2%E3%83%83%E3%83%95%E3%82%9A%E3%83%AB%E3%82%B7%E3%82%99%E3%83%A5%E3%83%BC%E3%82%B9_j6nmmn.png"
        },
    ],
    'イ': [
        {
            name: "イカ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533026/hiragana_game/icecream_scoops/%E3%82%A4%E3%82%AB_uc9sh5.png"
        },
        {
            name: "イルカ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533026/hiragana_game/icecream_scoops/%E3%82%A4%E3%83%AB%E3%82%AB_a47xud.png"
        }
    ],
    'ウ': [
        {
            name: "ウクレレ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533026/hiragana_game/icecream_scoops/%E3%82%A6%E3%82%AF%E3%83%AC%E3%83%AC_wbdrki.png"
        },
        {
            name: "ウイルス",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9_jnz4gm.png"
        },
        {
            name: "ウニ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%A6%E3%83%8B_gl6q8l.png"
        }
    ],
    'エ': [
        {
            name: "エアコン",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3_wy9xgx.png"
        }
    ],
    'オ': [
        {
            name: "オン",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%AA%E3%83%B3_ouovjn.png"
        },
        {
            name: "オフ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%AA%E3%83%95_kmsqpy.png"
        },
        {
            name: "オレンジ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99_zpagsb.png"
        }
    ],
    'カ': [
        {
            name: "カメラ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533024/hiragana_game/icecream_scoops/%E3%82%AB%E3%83%A1%E3%83%A9_hdhiz8.png"
        },
        {
            name: "カレー",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533025/hiragana_game/icecream_scoops/%E3%82%AB%E3%83%AC%E3%83%BC_xejdbl.png"
        }
    ],
    'キ': [
        {
            name: "キャンセル",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533024/hiragana_game/icecream_scoops/%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB_gk2yre.png"
        }
    ],
    'ク': [
        {
            name: "クッキー",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533024/hiragana_game/icecream_scoops/%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BC_kp6sbc.png"
        }
    ],
    // 'ケ': [
    //     {
    //         name: "",
    //         imgURL: ""
    //     }
    // ],
    'コ': [
        {
            name: "ココア",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533024/hiragana_game/icecream_scoops/%E3%82%B3%E3%82%B3%E3%82%A2_jth9de.png"
        },
        {
            name: "コーラ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533024/hiragana_game/icecream_scoops/%E3%82%B3%E3%83%BC%E3%83%A9_kjgkgi.png"
        }
    ],
    'サ': [
        {
            name: "サーモン",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%B5%E3%83%BC%E3%83%A2%E3%83%B3_adf35t.png"
        }
    ],
    'シ': [
        {
            name: "シェフ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%B7%E3%82%A7%E3%83%95_g62kc4.png"
        }
    ],
    'ス': [
        {
            name: "スイカ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687537469/hiragana_game/icecream_scoops/%E3%82%B9%E3%82%A4%E3%82%AB_ykjo1f.png"
        },
        {
            name: "スマホ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%B9%E3%83%9E%E3%83%9B_pqwn8k.png"
        }
    ],
    'セ': [
        {
            name: "セルフィー🤳",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A3%E3%83%BC_hk3wkx.png"
        }
    ],
    'ソ': [
        {
            name: "ソフトクリーム🍦",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1687533023/hiragana_game/icecream_scoops/%E3%82%BD%E3%83%95%E3%83%88%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0_cvkfn0.png"
        }
    ],
    // '': [
    //     {
    //         name: "",
    //         imgURL: ""
    //     }
    // ],
    'placeholder': [
        {
            name: "😎",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684916363/hiragana_game/%E7%84%A1%E6%95%B5_kduneg.png",
        },
        {
            name: "元気（げんき）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939307/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E5%85%83%E6%B0%97_h36z8u.png",
        },
        {
            name: "すごい",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939306/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E3%81%99%E3%81%93%E3%82%99%E3%81%84_vwxbgj.png",
        },
        {
            name: "お腹いっぱい（おなかいっぱい）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939306/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E3%81%8A%E8%85%B9%E3%81%84%E3%81%A3%E3%81%AF%E3%82%9A%E3%81%84_xhetgk.png",
        },
        {
            name: "虹（にじ）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939305/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E8%99%B9_dpcxmz.png",
        },
        {
            name: "ふくろ",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939305/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E3%81%B5%E3%81%8F%E3%82%8D_jpylgt.png",
        },
        {
            name: "頑張る（がんばる）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939305/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E9%A0%91%E5%BC%B5%E3%82%8B_ifhcrz.png",
        },
        {
            name: "夏（なつ）",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939305/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E5%A4%8F_agjhzc.png",
        },
        {
            name: "やった！",
            imgURL: "https://res.cloudinary.com/dd1dw34dc/image/upload/v1686939305/hiragana_game/icecream_scoops/%E7%84%A1%E6%95%B5_%E3%82%84%E3%81%A3%E3%81%9F_elk2zr.png",
        },
    ]

}

export default iceCreamByKana;
