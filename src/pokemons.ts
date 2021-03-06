import {katakanaToHiragana} from "./lib/hiragana";

enum PokemonType {
    Normal,
    Fire,
    Water,
    Grass,
    Electric,
    Ice,
    Fighting,
    Poison,
    Ground,
    Flying,
    Psychic,
    Bug,
    Rock,
    Ghost,
    Dragon,
    Dark,
    Steel,
    Fairy,
}

export interface Pokemon {
    number: number
    name: string
    pokemonTypes: PokemonType[]
}

export function getPokemons(s: string): Pokemon[] {
    if (s === "") {
        return []
    }
    return pokemons.filter(pokemon => {
        return pokemon.name.includes(s) || katakanaToHiragana(pokemon.name).includes(s)
    })
}

const pokemons: Pokemon[] = [
    {number:1,name:"サルノリ", pokemonTypes: [PokemonType.Grass]},
    {number:2,name:"バチンキー", pokemonTypes: [PokemonType.Grass]},
    {number:3,name:"ゴリランダー", pokemonTypes: [PokemonType.Grass]},
    {number:4,name:"ヒバニー", pokemonTypes: [PokemonType.Fire]},
    {number:5,name:"ラビフット", pokemonTypes: [PokemonType.Fire]},
    {number:6,name:"エースバーン", pokemonTypes: [PokemonType.Fire]},
    {number:7,name:"メッソン", pokemonTypes: [PokemonType.Water]},
    {number:8,name:"ジメレオン", pokemonTypes: [PokemonType.Water]},
    {number:9,name:"インテレオン", pokemonTypes: [PokemonType.Water]},
    {number:10,name:"サッチムシ", pokemonTypes: [PokemonType.Bug]},
    {number:11,name:"レドームシ", pokemonTypes: [PokemonType.Bug,PokemonType.Psychic]},
    {number:12,name:"イオルブ", pokemonTypes: [PokemonType.Bug,PokemonType.Psychic]},
    {number:13,name:"キャタピー", pokemonTypes: [PokemonType.Bug]},
    {number:14,name:"トランセル", pokemonTypes: [PokemonType.Bug]},
    {number:15,name:"バタフリー", pokemonTypes: [PokemonType.Bug,PokemonType.Flying]},
    {number:16,name:"アゴジムシ", pokemonTypes: [PokemonType.Bug]},
    {number:17,name:"デンヂムシ", pokemonTypes: [PokemonType.Bug,PokemonType.Electric]},
    {number:18,name:"クワガノン", pokemonTypes: [PokemonType.Bug,PokemonType.Electric]},
    {number:19,name:"ホーホー", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:20,name:"ヨルノズク", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:21,name:"ココガラ", pokemonTypes: [PokemonType.Flying]},
    {number:22,name:"アオガラス", pokemonTypes: [PokemonType.Flying]},
    {number:23,name:"アーマーガア", pokemonTypes: [PokemonType.Flying,PokemonType.Steel]},
    {number:24,name:"ホシガリス", pokemonTypes: [PokemonType.Normal]},
    {number:25,name:"ヨクバリス", pokemonTypes: [PokemonType.Normal]},
    {number:26,name:"マメパト", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:27,name:"ハトーボー", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:28,name:"ケンホロウ", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:29,name:"クスネ", pokemonTypes: [PokemonType.Dark]},
    {number:30,name:"フォクスライ", pokemonTypes: [PokemonType.Dark]},
    {number:31,name:"ガラルジグザグマ", pokemonTypes: [PokemonType.Dark,PokemonType.Normal]},
    {number:32,name:"ガラルマッスグマ", pokemonTypes: [PokemonType.Dark,PokemonType.Normal]},
    {number:33,name:"タチフサグマ", pokemonTypes: [PokemonType.Dark,PokemonType.Normal]},
    {number:34,name:"ウールー", pokemonTypes: [PokemonType.Normal]},
    {number:35,name:"バイウールー", pokemonTypes: [PokemonType.Normal]},
    {number:36,name:"ハスボー", pokemonTypes: [PokemonType.Water,PokemonType.Grass]},
    {number:37,name:"ハスブレロ", pokemonTypes: [PokemonType.Water,PokemonType.Grass]},
    {number:38,name:"ルンパッパ", pokemonTypes: [PokemonType.Water,PokemonType.Grass]},
    {number:39,name:"タネボー", pokemonTypes: [PokemonType.Grass]},
    {number:40,name:"コノハナ", pokemonTypes: [PokemonType.Grass,PokemonType.Dark]},
    {number:41,name:"ダーテング", pokemonTypes: [PokemonType.Grass,PokemonType.Dark]},
    {number:42,name:"カムカメ", pokemonTypes: [PokemonType.Water]},
    {number:43,name:"カジリガメ", pokemonTypes: [PokemonType.Water,PokemonType.Rock]},
    {number:44,name:"チョロネコ", pokemonTypes: [PokemonType.Dark]},
    {number:45,name:"レパルダス", pokemonTypes: [PokemonType.Dark]},
    {number:46,name:"ワンパチ", pokemonTypes: [PokemonType.Electric]},
    {number:47,name:"パルスワン", pokemonTypes: [PokemonType.Electric]},
    {number:48,name:"ホルビー", pokemonTypes: [PokemonType.Normal]},
    {number:49,name:"ホルード", pokemonTypes: [PokemonType.Normal,PokemonType.Ground]},
    {number:50,name:"チラーミィ", pokemonTypes: [PokemonType.Normal]},
    {number:51,name:"チラチーノ", pokemonTypes: [PokemonType.Normal]},
    {number:52,name:"アマカジ", pokemonTypes: [PokemonType.Grass]},
    {number:53,name:"アママイコ", pokemonTypes: [PokemonType.Grass]},
    {number:54,name:"アマージョ", pokemonTypes: [PokemonType.Grass]},
    {number:55,name:"ナゾノクサ", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:56,name:"クサイハナ", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:57,name:"ラフレシア", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:58,name:"キレイハナ", pokemonTypes: [PokemonType.Grass]},
    {number:59,name:"スボミー", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:60,name:"ロゼリア", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:61,name:"ロズレイド", pokemonTypes: [PokemonType.Grass,PokemonType.Poison]},
    {number:62,name:"キャモメ", pokemonTypes: [PokemonType.Water,PokemonType.Flying]},
    {number:63,name:"ペリッパー", pokemonTypes: [PokemonType.Water,PokemonType.Flying]},
    {number:64,name:"バチュル", pokemonTypes: [PokemonType.Bug,PokemonType.Electric]},
    {number:65,name:"デンチュラ", pokemonTypes: [PokemonType.Bug,PokemonType.Electric]},
    {number:66,name:"ラクライ", pokemonTypes: [PokemonType.Electric]},
    {number:67,name:"ライボルト", pokemonTypes: [PokemonType.Electric]},
    {number:68,name:"ロコン", pokemonTypes: [PokemonType.Fire]},
    {number:69,name:"キュウコン", pokemonTypes: [PokemonType.Fire]},
    {number:70,name:"ガーディ", pokemonTypes: [PokemonType.Fire]},
    {number:71,name:"ウインディ", pokemonTypes: [PokemonType.Fire]},
    {number:72,name:"バニプッチ", pokemonTypes: [PokemonType.Ice]},
    {number:73,name:"バニリッチ", pokemonTypes: [PokemonType.Ice]},
    {number:74,name:"バイバニラ", pokemonTypes: [PokemonType.Ice]},
    {number:75,name:"ウリムー", pokemonTypes: [PokemonType.Ice,PokemonType.Ground]},
    {number:76,name:"イノムー", pokemonTypes: [PokemonType.Ice,PokemonType.Ground]},
    {number:77,name:"マンムー", pokemonTypes: [PokemonType.Ice,PokemonType.Ground]},
    {number:78,name:"デリバード", pokemonTypes: [PokemonType.Ice,PokemonType.Flying]},
    {number:79,name:"ユキワラシ", pokemonTypes: [PokemonType.Ice]},
    {number:80,name:"オニゴーリ", pokemonTypes: [PokemonType.Ice]},
    {number:81,name:"ユキメノコ", pokemonTypes: [PokemonType.Ice,PokemonType.Ghost]},
    {number:82,name:"ヤジロン", pokemonTypes: [PokemonType.Ground,PokemonType.Psychic]},
    {number:83,name:"ネンドール", pokemonTypes: [PokemonType.Ground,PokemonType.Psychic]},
    {number:84,name:"ドロバンコ", pokemonTypes: [PokemonType.Ground]},
    {number:85,name:"バンバドロ", pokemonTypes: [PokemonType.Ground]},
    {number:86,name:"イシズマイ", pokemonTypes: [PokemonType.Bug,PokemonType.Rock]},
    {number:87,name:"イワパレス", pokemonTypes: [PokemonType.Bug,PokemonType.Rock]},
    {number:88,name:"ゴビット", pokemonTypes: [PokemonType.Ground,PokemonType.Ghost]},
    {number:89,name:"ゴルーグ", pokemonTypes: [PokemonType.Ground,PokemonType.Ghost]},
    {number:90,name:"ムンナ", pokemonTypes: [PokemonType.Psychic]},
    {number:91,name:"ムシャーナ", pokemonTypes: [PokemonType.Psychic]},
    {number:92,name:"ネイティ", pokemonTypes: [PokemonType.Psychic,PokemonType.Flying]},
    {number:93,name:"ネイティオ", pokemonTypes: [PokemonType.Psychic,PokemonType.Flying]},
    {number:94,name:"ヌイコグマ", pokemonTypes: [PokemonType.Normal,PokemonType.Fighting]},
    {number:95,name:"キテルグマ", pokemonTypes: [PokemonType.Normal,PokemonType.Fighting]},
    {number:96,name:"ユキカブリ", pokemonTypes: [PokemonType.Grass,PokemonType.Ice]},
    {number:97,name:"ユキノオー", pokemonTypes: [PokemonType.Grass,PokemonType.Ice]},
    {number:98,name:"クラブ", pokemonTypes: [PokemonType.Water]},
    {number:99,name:"キングラー", pokemonTypes: [PokemonType.Water]},
    {number:100,name:"ウパー", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:101,name:"ヌオー", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:102,name:"ヘイガニ", pokemonTypes: [PokemonType.Water]},
    {number:103,name:"シザリガー", pokemonTypes: [PokemonType.Water,PokemonType.Dark]},
    {number:104,name:"ツチニン", pokemonTypes: [PokemonType.Bug,PokemonType.Ground]},
    {number:105,name:"テッカニン", pokemonTypes: [PokemonType.Bug,PokemonType.Flying]},
    {number:106,name:"ヌケニン", pokemonTypes: [PokemonType.Bug,PokemonType.Ghost]},
    {number:107,name:"バルキー", pokemonTypes: [PokemonType.Fighting]},
    {number:108,name:"サワムラー", pokemonTypes: [PokemonType.Fighting]},
    {number:109,name:"エビワラー", pokemonTypes: [PokemonType.Fighting]},
    {number:110,name:"カポエラー", pokemonTypes: [PokemonType.Fighting]},
    {number:111,name:"ヤンチャム", pokemonTypes: [PokemonType.Fighting]},
    {number:112,name:"ゴロンダ", pokemonTypes: [PokemonType.Fighting,PokemonType.Dark]},
    {number:113,name:"ギアル", pokemonTypes: [PokemonType.Steel]},
    {number:114,name:"ギギアル", pokemonTypes: [PokemonType.Steel]},
    {number:115,name:"ギギギアル", pokemonTypes: [PokemonType.Steel]},
    {number:116,name:"ミツハニー", pokemonTypes: [PokemonType.Bug,PokemonType.Flying]},
    {number:117,name:"ビークイン", pokemonTypes: [PokemonType.Bug,PokemonType.Flying]},
    {number:118,name:"ドーミラー", pokemonTypes: [PokemonType.Steel,PokemonType.Psychic]},
    {number:119,name:"ドータクン", pokemonTypes: [PokemonType.Steel,PokemonType.Psychic]},
    {number:120,name:"ラルトス", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:121,name:"キルリア", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:122,name:"サーナイト", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:123,name:"エルレイド", pokemonTypes: [PokemonType.Psychic,PokemonType.Fighting]},
    {number:124,name:"フワンテ", pokemonTypes: [PokemonType.Ghost,PokemonType.Flying]},
    {number:125,name:"フワライド", pokemonTypes: [PokemonType.Ghost,PokemonType.Flying]},
    {number:126,name:"ヒメンカ", pokemonTypes: [PokemonType.Grass]},
    {number:127,name:"ワタシラガ", pokemonTypes: [PokemonType.Grass]},
    {number:128,name:"チェリンボ", pokemonTypes: [PokemonType.Grass]},
    {number:129,name:"チェリム", pokemonTypes: [PokemonType.Grass]},
    {number:130,name:"スカンプー", pokemonTypes: [PokemonType.Poison,PokemonType.Dark]},
    {number:131,name:"スカタンク", pokemonTypes: [PokemonType.Poison,PokemonType.Dark]},
    {number:132,name:"オタマロ", pokemonTypes: [PokemonType.Water]},
    {number:133,name:"ガマガル", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:134,name:"ガマゲロゲ", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:135,name:"ヨマワル", pokemonTypes: [PokemonType.Ghost]},
    {number:136,name:"サマヨール", pokemonTypes: [PokemonType.Ghost]},
    {number:137,name:"ヨノワール", pokemonTypes: [PokemonType.Ghost]},
    {number:138,name:"ワンリキー", pokemonTypes: [PokemonType.Fighting]},
    {number:139,name:"ゴーリキー", pokemonTypes: [PokemonType.Fighting]},
    {number:140,name:"カイリキー", pokemonTypes: [PokemonType.Fighting]},
    {number:141,name:"ゴース", pokemonTypes: [PokemonType.Ghost,PokemonType.Poison]},
    {number:142,name:"ゴースト", pokemonTypes: [PokemonType.Ghost,PokemonType.Poison]},
    {number:143,name:"ゲンガー", pokemonTypes: [PokemonType.Ghost,PokemonType.Poison]},
    {number:144,name:"コイキング", pokemonTypes: [PokemonType.Water]},
    {number:145,name:"ギャラドス", pokemonTypes: [PokemonType.Water,PokemonType.Flying]},
    {number:146,name:"トサキント", pokemonTypes: [PokemonType.Water]},
    {number:147,name:"アズマオウ", pokemonTypes: [PokemonType.Water]},
    {number:148,name:"テッポウオ", pokemonTypes: [PokemonType.Water]},
    {number:149,name:"オクタン", pokemonTypes: [PokemonType.Water]},
    {number:150,name:"シェルダー", pokemonTypes: [PokemonType.Water]},
    {number:151,name:"パルシェン", pokemonTypes: [PokemonType.Water,PokemonType.Ice]},
    {number:152,name:"ヒンバス", pokemonTypes: [PokemonType.Water]},
    {number:153,name:"ミロカロス", pokemonTypes: [PokemonType.Water]},
    {number:154,name:"バスラオ", pokemonTypes: [PokemonType.Water]},
    {number:155,name:"ヨワシ", pokemonTypes: [PokemonType.Water]},
    {number:156,name:"ナマコブシ", pokemonTypes: [PokemonType.Water]},
    {number:157,name:"ヤブクロン", pokemonTypes: [PokemonType.Poison]},
    {number:158,name:"ダストダス", pokemonTypes: [PokemonType.Poison]},
    {number:159,name:"ヤクデ", pokemonTypes: [PokemonType.Fire,PokemonType.Bug]},
    {number:160,name:"マルヤクデ", pokemonTypes: [PokemonType.Fire,PokemonType.Bug]},
    {number:161,name:"タンドン", pokemonTypes: [PokemonType.Rock]},
    {number:162,name:"トロッゴン", pokemonTypes: [PokemonType.Rock,PokemonType.Fire]},
    {number:163,name:"セキタンザン", pokemonTypes: [PokemonType.Rock,PokemonType.Fire]},
    {number:164,name:"ディグダ", pokemonTypes: [PokemonType.Ground]},
    {number:165,name:"ダグトリオ", pokemonTypes: [PokemonType.Ground]},
    {number:166,name:"モグリュー", pokemonTypes: [PokemonType.Ground]},
    {number:167,name:"ドリュウズ", pokemonTypes: [PokemonType.Ground,PokemonType.Steel]},
    {number:168,name:"ダンゴロ", pokemonTypes: [PokemonType.Rock]},
    {number:169,name:"ガントル", pokemonTypes: [PokemonType.Rock]},
    {number:170,name:"ギガイアス", pokemonTypes: [PokemonType.Rock]},
    {number:171,name:"ドッコラー", pokemonTypes: [PokemonType.Fighting]},
    {number:172,name:"ドテッコツ", pokemonTypes: [PokemonType.Fighting]},
    {number:173,name:"ローブシン", pokemonTypes: [PokemonType.Fighting]},
    {number:174,name:"コロモリ", pokemonTypes: [PokemonType.Psychic,PokemonType.Flying]},
    {number:175,name:"ココロモリ", pokemonTypes: [PokemonType.Psychic,PokemonType.Flying]},
    {number:176,name:"オンバット", pokemonTypes: [PokemonType.Flying,PokemonType.Dragon]},
    {number:177,name:"オンバーン", pokemonTypes: [PokemonType.Flying,PokemonType.Dragon]},
    {number:178,name:"イワーク", pokemonTypes: [PokemonType.Rock,PokemonType.Ground]},
    {number:179,name:"ハガネール", pokemonTypes: [PokemonType.Steel,PokemonType.Ground]},
    {number:180,name:"サシカマス", pokemonTypes: [PokemonType.Water]},
    {number:181,name:"カマスジョー", pokemonTypes: [PokemonType.Water]},
    {number:182,name:"ニャース", pokemonTypes: [PokemonType.Normal]},
    {number:182,name:"ガラルニャース", pokemonTypes: [PokemonType.Steel]},
    {number:183,name:"ニャイキング", pokemonTypes: [PokemonType.Steel]},
    {number:184,name:"ペルシアン", pokemonTypes: [PokemonType.Normal]},
    {number:185,name:"マホミル", pokemonTypes: [PokemonType.Fairy]},
    {number:186,name:"マホイップ", pokemonTypes: [PokemonType.Fairy]},
    {number:187,name:"アブリー", pokemonTypes: [PokemonType.Bug,PokemonType.Fairy]},
    {number:188,name:"アブリボン", pokemonTypes: [PokemonType.Bug,PokemonType.Fairy]},
    {number:189,name:"テッシード", pokemonTypes: [PokemonType.Grass,PokemonType.Steel]},
    {number:190,name:"ナットレイ", pokemonTypes: [PokemonType.Grass,PokemonType.Steel]},
    {number:191,name:"バケッチャ", pokemonTypes: [PokemonType.Ghost,PokemonType.Grass]},
    {number:192,name:"パンプジン", pokemonTypes: [PokemonType.Ghost,PokemonType.Grass]},
    {number:193,name:"ピチュー", pokemonTypes: [PokemonType.Electric]},
    {number:194,name:"ピカチュウ", pokemonTypes: [PokemonType.Electric]},
    {number:195,name:"ライチュウ", pokemonTypes: [PokemonType.Electric]},
    {number:196,name:"イーブイ", pokemonTypes: [PokemonType.Normal]},
    {number:197,name:"シャワーズ", pokemonTypes: [PokemonType.Water]},
    {number:198,name:"サンダース", pokemonTypes: [PokemonType.Electric]},
    {number:199,name:"ブースター", pokemonTypes: [PokemonType.Fire]},
    {number:200,name:"エーフィ", pokemonTypes: [PokemonType.Psychic]},
    {number:201,name:"ブラッキー", pokemonTypes: [PokemonType.Dark]},
    {number:202,name:"リーフィア", pokemonTypes: [PokemonType.Grass]},
    {number:203,name:"グレイシア", pokemonTypes: [PokemonType.Ice]},
    {number:204,name:"ニンフィア", pokemonTypes: [PokemonType.Fairy]},
    {number:205,name:"カジッチュ", pokemonTypes: [PokemonType.Grass,PokemonType.Dragon]},
    {number:206,name:"アップリュー", pokemonTypes: [PokemonType.Grass,PokemonType.Dragon]},
    {number:207,name:"タルップル", pokemonTypes: [PokemonType.Grass,PokemonType.Dragon]},
    {number:208,name:"ニャスパー", pokemonTypes: [PokemonType.Psychic]},
    {number:209,name:"ニャオニクス", pokemonTypes: [PokemonType.Psychic]},
    {number:209,name:"ニャオニクス（オス）", pokemonTypes: [PokemonType.Psychic]},
    {number:210,name:"ペロッパフ", pokemonTypes: [PokemonType.Fairy]},
    {number:211,name:"ペロリーム", pokemonTypes: [PokemonType.Fairy]},
    {number:212,name:"シュシュプ", pokemonTypes: [PokemonType.Fairy]},
    {number:213,name:"フレフワン", pokemonTypes: [PokemonType.Fairy]},
    {number:214,name:"シズクモ", pokemonTypes: [PokemonType.Water,PokemonType.Bug]},
    {number:215,name:"オニシズクモ", pokemonTypes: [PokemonType.Water,PokemonType.Bug]},
    {number:216,name:"ソーナノ", pokemonTypes: [PokemonType.Psychic]},
    {number:217,name:"ソーナンス", pokemonTypes: [PokemonType.Psychic]},
    {number:218,name:"ガラルカモネギ", pokemonTypes: [PokemonType.Fighting]},
    {number:219,name:"ネギガナイト", pokemonTypes: [PokemonType.Fighting]},
    {number:220,name:"チョンチー", pokemonTypes: [PokemonType.Water,PokemonType.Electric]},
    {number:221,name:"ランターン", pokemonTypes: [PokemonType.Water,PokemonType.Electric]},
    {number:222,name:"グレッグル", pokemonTypes: [PokemonType.Poison,PokemonType.Fighting]},
    {number:223,name:"ドクロッグ", pokemonTypes: [PokemonType.Poison,PokemonType.Fighting]},
    {number:224,name:"ズルッグ", pokemonTypes: [PokemonType.Dark,PokemonType.Fighting]},
    {number:225,name:"ズルズキン", pokemonTypes: [PokemonType.Dark,PokemonType.Fighting]},
    {number:226,name:"ガラルマッギョ", pokemonTypes: [PokemonType.Ground,PokemonType.Steel]},
    {number:227,name:"ツボツボ", pokemonTypes: [PokemonType.Bug,PokemonType.Rock]},
    {number:228,name:"ドジョッチ", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:229,name:"ナマズン", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:230,name:"カラナクシ", pokemonTypes: [PokemonType.Water]},
    {number:230,name:"カラナクシ（にしのうみ）", pokemonTypes: [PokemonType.Water]},
    {number:231,name:"トリトドン", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:231,name:"トリトドン（にしのうみ）", pokemonTypes: [PokemonType.Water,PokemonType.Ground]},
    {number:232,name:"コソクムシ", pokemonTypes: [PokemonType.Bug,PokemonType.Water]},
    {number:233,name:"グソクムシャ", pokemonTypes: [PokemonType.Bug,PokemonType.Water]},
    {number:234,name:"カメテテ", pokemonTypes: [PokemonType.Rock,PokemonType.Water]},
    {number:235,name:"ガメノデス", pokemonTypes: [PokemonType.Rock,PokemonType.Water]},
    {number:236,name:"ガラルサニーゴ", pokemonTypes: [PokemonType.Ghost]},
    {number:237,name:"サニゴーン", pokemonTypes: [PokemonType.Ghost]},
    {number:238,name:"ベロバー", pokemonTypes: [PokemonType.Dark,PokemonType.Fairy]},
    {number:239,name:"ギモー", pokemonTypes: [PokemonType.Dark,PokemonType.Fairy]},
    {number:240,name:"オーロンゲ", pokemonTypes: [PokemonType.Dark,PokemonType.Fairy]},
    {number:241,name:"ミブリム", pokemonTypes: [PokemonType.Psychic]},
    {number:242,name:"テブリム", pokemonTypes: [PokemonType.Psychic]},
    {number:243,name:"ブリムオン", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:244,name:"ヤトウモリ", pokemonTypes: [PokemonType.Poison,PokemonType.Fire]},
    {number:245,name:"エンニュート", pokemonTypes: [PokemonType.Poison,PokemonType.Fire]},
    {number:246,name:"コマタナ", pokemonTypes: [PokemonType.Dark,PokemonType.Steel]},
    {number:247,name:"キリキザン", pokemonTypes: [PokemonType.Dark,PokemonType.Steel]},
    {number:248,name:"ナゲキ", pokemonTypes: [PokemonType.Fighting]},
    {number:249,name:"ダゲキ", pokemonTypes: [PokemonType.Fighting]},
    {number:250,name:"ドガース", pokemonTypes: [PokemonType.Poison]},
    {number:251,name:"ガラルマタドガス", pokemonTypes: [PokemonType.Poison,PokemonType.Fairy]},
    {number:252,name:"ウソハチ", pokemonTypes: [PokemonType.Rock]},
    {number:253,name:"ウソッキー", pokemonTypes: [PokemonType.Rock]},
    {number:254,name:"ピィ", pokemonTypes: [PokemonType.Fairy]},
    {number:255,name:"ピッピ", pokemonTypes: [PokemonType.Fairy]},
    {number:256,name:"ピクシー", pokemonTypes: [PokemonType.Fairy]},
    {number:257,name:"トゲピー", pokemonTypes: [PokemonType.Fairy]},
    {number:258,name:"トゲチック", pokemonTypes: [PokemonType.Fairy,PokemonType.Flying]},
    {number:259,name:"トゲキッス", pokemonTypes: [PokemonType.Fairy,PokemonType.Flying]},
    {number:260,name:"ゴンベ", pokemonTypes: [PokemonType.Normal]},
    {number:261,name:"カビゴン", pokemonTypes: [PokemonType.Normal]},
    {number:262,name:"モンメン", pokemonTypes: [PokemonType.Grass,PokemonType.Fairy]},
    {number:263,name:"エルフーン", pokemonTypes: [PokemonType.Grass,PokemonType.Fairy]},
    {number:264,name:"サイホーン", pokemonTypes: [PokemonType.Ground,PokemonType.Rock]},
    {number:265,name:"サイドン", pokemonTypes: [PokemonType.Ground,PokemonType.Rock]},
    {number:266,name:"ドサイドン", pokemonTypes: [PokemonType.Ground,PokemonType.Rock]},
    {number:267,name:"ゴチム", pokemonTypes: [PokemonType.Psychic]},
    {number:268,name:"ゴチミル", pokemonTypes: [PokemonType.Psychic]},
    {number:269,name:"ゴチルゼル", pokemonTypes: [PokemonType.Psychic]},
    {number:270,name:"ユニラン", pokemonTypes: [PokemonType.Psychic]},
    {number:271,name:"ダブラン", pokemonTypes: [PokemonType.Psychic]},
    {number:272,name:"ランクルス", pokemonTypes: [PokemonType.Psychic]},
    {number:273,name:"カブルモ", pokemonTypes: [PokemonType.Bug]},
    {number:274,name:"シュバルゴ", pokemonTypes: [PokemonType.Bug,PokemonType.Steel]},
    {number:275,name:"チョボマキ", pokemonTypes: [PokemonType.Bug]},
    {number:276,name:"アギルダー", pokemonTypes: [PokemonType.Bug]},
    {number:277,name:"リグレー", pokemonTypes: [PokemonType.Psychic]},
    {number:278,name:"オーベム", pokemonTypes: [PokemonType.Psychic]},
    {number:279,name:"クマシュン", pokemonTypes: [PokemonType.Ice]},
    {number:280,name:"ツンベアー", pokemonTypes: [PokemonType.Ice]},
    {number:281,name:"ワシボン", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:282,name:"ウォーグル", pokemonTypes: [PokemonType.Normal,PokemonType.Flying]},
    {number:283,name:"バルチャイ", pokemonTypes: [PokemonType.Dark,PokemonType.Flying]},
    {number:284,name:"バルジーナ", pokemonTypes: [PokemonType.Dark,PokemonType.Flying]},
    {number:285,name:"スコルピ", pokemonTypes: [PokemonType.Poison,PokemonType.Bug]},
    {number:286,name:"ドラピオン", pokemonTypes: [PokemonType.Poison,PokemonType.Dark]},
    {number:287,name:"ヒトモシ", pokemonTypes: [PokemonType.Ghost,PokemonType.Fire]},
    {number:288,name:"ランプラー", pokemonTypes: [PokemonType.Ghost,PokemonType.Fire]},
    {number:289,name:"シャンデラ", pokemonTypes: [PokemonType.Ghost,PokemonType.Fire]},
    {number:290,name:"マーイーカ", pokemonTypes: [PokemonType.Dark,PokemonType.Psychic]},
    {number:291,name:"カラマネロ", pokemonTypes: [PokemonType.Dark,PokemonType.Psychic]},
    {number:292,name:"ニューラ", pokemonTypes: [PokemonType.Dark,PokemonType.Ice]},
    {number:293,name:"マニューラ", pokemonTypes: [PokemonType.Dark,PokemonType.Ice]},
    {number:294,name:"ヤミラミ", pokemonTypes: [PokemonType.Dark,PokemonType.Ghost]},
    {number:295,name:"クチート", pokemonTypes: [PokemonType.Steel,PokemonType.Fairy]},
    {number:296,name:"マラカッチ", pokemonTypes: [PokemonType.Grass]},
    {number:297,name:"シンボラー", pokemonTypes: [PokemonType.Psychic,PokemonType.Flying]},
    {number:298,name:"リオル", pokemonTypes: [PokemonType.Fighting]},
    {number:299,name:"ルカリオ", pokemonTypes: [PokemonType.Fighting,PokemonType.Steel]},
    {number:300,name:"コータス", pokemonTypes: [PokemonType.Fire]},
    {number:301,name:"ミミッキュ", pokemonTypes: [PokemonType.Ghost,PokemonType.Fairy]},
    {number:302,name:"ゾウドウ", pokemonTypes: [PokemonType.Steel]},
    {number:303,name:"ダイオウドウ", pokemonTypes: [PokemonType.Steel]},
    {number:304,name:"ハリーセン", pokemonTypes: [PokemonType.Water,PokemonType.Poison]},
    {number:305,name:"プルリル", pokemonTypes: [PokemonType.Water,PokemonType.Ghost]},
    {number:306,name:"ブルンゲル", pokemonTypes: [PokemonType.Water,PokemonType.Ghost]},
    {number:307,name:"ヒドイデ", pokemonTypes: [PokemonType.Poison,PokemonType.Water]},
    {number:308,name:"ドヒドイデ", pokemonTypes: [PokemonType.Poison,PokemonType.Water]},
    {number:309,name:"ウッウ", pokemonTypes: [PokemonType.Flying,PokemonType.Water]},
    {number:310,name:"エレズン", pokemonTypes: [PokemonType.Electric,PokemonType.Poison]},
    {number:311,name:"ストリンダー（ローなすがた）", pokemonTypes: [PokemonType.Electric,PokemonType.Poison]},
    {number:312,name:"スナヘビ", pokemonTypes: [PokemonType.Ground]},
    {number:313,name:"サダイジャ", pokemonTypes: [PokemonType.Ground]},
    {number:314,name:"ヒポポタス", pokemonTypes: [PokemonType.Ground]},
    {number:315,name:"カバルドン", pokemonTypes: [PokemonType.Ground]},
    {number:316,name:"アイアント", pokemonTypes: [PokemonType.Bug,PokemonType.Steel]},
    {number:317,name:"クイタラン", pokemonTypes: [PokemonType.Fire]},
    {number:318,name:"エリキテル", pokemonTypes: [PokemonType.Electric,PokemonType.Normal]},
    {number:319,name:"エレザード", pokemonTypes: [PokemonType.Electric,PokemonType.Normal]},
    {number:320,name:"ルチャブル", pokemonTypes: [PokemonType.Fighting,PokemonType.Flying]},
    {number:321,name:"ナックラー", pokemonTypes: [PokemonType.Ground]},
    {number:322,name:"ビブラーバ", pokemonTypes: [PokemonType.Ground,PokemonType.Dragon]},
    {number:323,name:"フライゴン", pokemonTypes: [PokemonType.Ground,PokemonType.Dragon]},
    {number:324,name:"キバゴ", pokemonTypes: [PokemonType.Dragon]},
    {number:325,name:"オノンド", pokemonTypes: [PokemonType.Dragon]},
    {number:326,name:"オノノクス", pokemonTypes: [PokemonType.Dragon]},
    {number:327,name:"デスマス", pokemonTypes: [PokemonType.Ghost]},
    {number:327,name:"ガラルデスマス", pokemonTypes: [PokemonType.Ground,PokemonType.Ghost]},
    {number:328,name:"デスバーン", pokemonTypes: [PokemonType.Ground,PokemonType.Ghost]},
    {number:329,name:"デスカーン", pokemonTypes: [PokemonType.Ghost]},
    {number:330,name:"ヒトツキ", pokemonTypes: [PokemonType.Steel,PokemonType.Ghost]},
    {number:331,name:"ニダンギル", pokemonTypes: [PokemonType.Steel,PokemonType.Ghost]},
    {number:332,name:"ギルガルド", pokemonTypes: [PokemonType.Steel,PokemonType.Ghost]},
    {number:333,name:"ガラルポニータ", pokemonTypes: [PokemonType.Psychic]},
    {number:334,name:"ガラルギャロップ", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:335,name:"ヤバチャ", pokemonTypes: [PokemonType.Ghost]},
    {number:336,name:"ポットデス", pokemonTypes: [PokemonType.Ghost]},
    {number:337,name:"イエッサン（オスのすがた）", pokemonTypes: [PokemonType.Psychic,PokemonType.Normal]},
    {number:337,name:"イエッサン（メスのすがた）", pokemonTypes: [PokemonType.Psychic,PokemonType.Normal]},
    {number:338,name:"ボクレー", pokemonTypes: [PokemonType.Ghost,PokemonType.Grass]},
    {number:339,name:"オーロット", pokemonTypes: [PokemonType.Ghost,PokemonType.Grass]},
    {number:340,name:"ネマシュ", pokemonTypes: [PokemonType.Grass,PokemonType.Fairy]},
    {number:341,name:"マシェード", pokemonTypes: [PokemonType.Grass,PokemonType.Fairy]},
    {number:342,name:"ヤレユータン", pokemonTypes: [PokemonType.Normal,PokemonType.Psychic]},
    {number:343,name:"ナゲツケサル", pokemonTypes: [PokemonType.Fighting]},
    {number:344,name:"モルペコ", pokemonTypes: [PokemonType.Electric,PokemonType.Dark]},
    {number:345,name:"タイレーツ", pokemonTypes: [PokemonType.Fighting]},
    {number:346,name:"ジジーロン", pokemonTypes: [PokemonType.Normal,PokemonType.Dragon]},
    {number:347,name:"バクガメス", pokemonTypes: [PokemonType.Fire,PokemonType.Dragon]},
    {number:348,name:"トゲデマル", pokemonTypes: [PokemonType.Electric,PokemonType.Steel]},
    {number:349,name:"ユキハミ", pokemonTypes: [PokemonType.Ice,PokemonType.Bug]},
    {number:350,name:"モスノウ", pokemonTypes: [PokemonType.Ice,PokemonType.Bug]},
    {number:351,name:"タタッコ", pokemonTypes: [PokemonType.Fighting]},
    {number:352,name:"オトスパス", pokemonTypes: [PokemonType.Fighting]},
    {number:353,name:"バチンウニ", pokemonTypes: [PokemonType.Electric]},
    {number:354,name:"タマンタ", pokemonTypes: [PokemonType.Water,PokemonType.Flying]},
    {number:355,name:"マンタイン", pokemonTypes: [PokemonType.Water,PokemonType.Flying]},
    {number:356,name:"ホエルコ", pokemonTypes: [PokemonType.Water]},
    {number:357,name:"ホエルオー", pokemonTypes: [PokemonType.Water]},
    {number:358,name:"カチコール", pokemonTypes: [PokemonType.Ice]},
    {number:359,name:"クレベース", pokemonTypes: [PokemonType.Ice]},
    {number:360,name:"ダダリン", pokemonTypes: [PokemonType.Ghost,PokemonType.Grass]},
    {number:361,name:"ラプラス", pokemonTypes: [PokemonType.Water,PokemonType.Ice]},
    {number:362,name:"ルナトーン", pokemonTypes: [PokemonType.Rock,PokemonType.Psychic]},
    {number:363,name:"ソルロック", pokemonTypes: [PokemonType.Rock,PokemonType.Psychic]},
    {number:364,name:"マネネ", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:365,name:"バリヤード", pokemonTypes: [PokemonType.Psychic,PokemonType.Fairy]},
    {number:365,name:"ガラルバリヤード", pokemonTypes: [PokemonType.Ice,PokemonType.Psychic]},
    {number:366,name:"バリコオル", pokemonTypes: [PokemonType.Ice,PokemonType.Psychic]},
    {number:367,name:"ガラルダルマッカ", pokemonTypes: [PokemonType.Ice]},
    {number:368,name:"ガラルヒヒダルマ", pokemonTypes: [PokemonType.Ice]},
    {number:369,name:"イシヘンジン", pokemonTypes: [PokemonType.Rock]},
    {number:370,name:"コオリッポ（アイスフェイス）", pokemonTypes: [PokemonType.Ice]},
    {number:371,name:"ジュラルドン", pokemonTypes: [PokemonType.Steel,PokemonType.Dragon]},
    {number:372,name:"ロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Ghost]},
    {number:372,name:"ヒートロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Fire]},
    {number:372,name:"ウォッシュロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Water]},
    {number:372,name:"フロストロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Ice]},
    {number:372,name:"スピンロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Flying]},
    {number:372,name:"カットロトム", pokemonTypes: [PokemonType.Electric,PokemonType.Grass]},
    {number:373,name:"メタモン", pokemonTypes: [PokemonType.Normal]},
    {number:374,name:"パッチラゴン", pokemonTypes: [PokemonType.Electric,PokemonType.Dragon]},
    {number:375,name:"パッチルドン", pokemonTypes: [PokemonType.Electric,PokemonType.Ice]},
    {number:376,name:"ウオノラゴン", pokemonTypes: [PokemonType.Water,PokemonType.Dragon]},
    {number:377,name:"ウオチルドン", pokemonTypes: [PokemonType.Water,PokemonType.Ice]},
    {number:378,name:"ヒトカゲ", pokemonTypes: [PokemonType.Fire]},
    {number:379,name:"リザード", pokemonTypes: [PokemonType.Fire]},
    {number:380,name:"リザードン", pokemonTypes: [PokemonType.Fire,PokemonType.Flying]},
    {number:381,name:"タイプ：ヌル", pokemonTypes: [PokemonType.Normal]},
    {number:382,name:"シルヴァディ", pokemonTypes: [PokemonType.Normal]},
    {number:383,name:"ヨーギラス", pokemonTypes: [PokemonType.Rock,PokemonType.Ground]},
    {number:384,name:"サナギラス", pokemonTypes: [PokemonType.Rock,PokemonType.Ground]},
    {number:385,name:"バンギラス", pokemonTypes: [PokemonType.Rock,PokemonType.Dark]},
    {number:386,name:"モノズ", pokemonTypes: [PokemonType.Dark,PokemonType.Dragon]},
    {number:387,name:"ジヘッド", pokemonTypes: [PokemonType.Dark,PokemonType.Dragon]},
    {number:388,name:"サザンドラ", pokemonTypes: [PokemonType.Dark,PokemonType.Dragon]},
    {number:389,name:"ヌメラ", pokemonTypes: [PokemonType.Dragon]},
    {number:390,name:"ヌメイル", pokemonTypes: [PokemonType.Dragon]},
    {number:391,name:"ヌメルゴン", pokemonTypes: [PokemonType.Dragon]},
    {number:392,name:"ジャラコ", pokemonTypes: [PokemonType.Dragon]},
    {number:393,name:"ジャランゴ", pokemonTypes: [PokemonType.Dragon,PokemonType.Fighting]},
    {number:394,name:"ジャラランガ", pokemonTypes: [PokemonType.Dragon,PokemonType.Fighting]},
    {number:395,name:"ドラメシヤ", pokemonTypes: [PokemonType.Dragon,PokemonType.Ghost]},
    {number:396,name:"ドロンチ", pokemonTypes: [PokemonType.Dragon,PokemonType.Ghost]},
    {number:397,name:"ドラパルト", pokemonTypes: [PokemonType.Dragon,PokemonType.Ghost]},
    {number:398,name:"ザシアン", pokemonTypes: [PokemonType.Fairy]},
    {number:399,name:"ザマゼンタ", pokemonTypes: [PokemonType.Fighting]},
    {number:400,name:"ムゲンダイナ", pokemonTypes: [PokemonType.Poison,PokemonType.Dragon]}
    ]
