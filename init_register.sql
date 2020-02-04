create database if not exists rental_bicycle_DB;
use rental_bicycle_DB;

create table shop(
id int auto_increment,
name varchar(255),
address varchar(255),
tel varchar(20),
opening varchar(50),
holiday varchar(50),
URL varchar(150),
lat double(9,6),
lon double(9,6),
stock int,
available int,
PRIMARY KEY (id)
);
desc shop;

create table user(
id int auto_increment,
start_time datetime,
PRIMARY KEY (id)
);
desc user;

INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都サイクリングツアープロジェクト","京都市下京区油小路塩小路通下ル東油小路町552-13","075-354-3636","9:00～19:00","無休","http://www.kctp.net/",34.9863,135.754178,4,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京の楽チャリ　東山三条店","京都市左京区南門前町538-3　ABCビル1F","075-761-5828","9:00～18:00","不定休","http://rentacycle.jp/",35.010073,135.778395,2,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京の楽チャリ　京都駅七条店","京都区下京区新日吉町124-3-2　ルーム大森1F ","080-7975-1319","9:00～18:00","不定休","http://rentacycle.jp/",34.990002000000004,135.765376,4,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都ちりんちりん　本部","京都市上京区和水町439-19","075-414-0210","8:30～20:00","不定休","http://chirin2.com/",35.024209,135.748716,2,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都ちりんちりん 二条城デリバリーセンター","京都市中京区押西洞院町624 ベラジオ二条城前1階","075-414-0210","8:30～20:00","不定休","http://chirin2.com/",35.012025200000004,135.75493600000001,2,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都レンタルサイクル","京都市中京区六角町352","075-746-2727","9:00～19:00","無休","http://kyoto-rental-cycle.com/",35.007197999999995,135.756769,3,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("B.B.HOUSE マルニ","京都市左京区浄土寺下馬場町100","075-771-6644","9:00～19:00","日曜日","―",35.023004799999995,135.7920995,6,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("Bike Laboratory","北区小山下内河原町48-23","075-203-1382","10:00～19:00","水曜日","http://bike-laboratory.on.omisenomikata.jp/",35.0439423,135.7605825,6,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("レンタサイクル　京都みやび屋","京都市下京区上珠数屋町323","075-354-7060"," 8:30～19:00","無休","http://k-miyabiya.jp",34.9925,135.7602778,1,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("レンタサイクル　京都みやび屋IF","京都市下京区粉川町226","075-354-7060"," 8:30～19:00","不定休","http://k-miyabiya.jp",34.9897222,135.76,6,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("レンタサイクルイン京都　京都駅南店","京都市南区東九条西山王町1-4","080-4238-2299","9:00～18:30","不定休","http://www.kyoto-rent-a-bike.jp/",34.9819848,135.760757,7,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("タケウチ商会","京都市上京区河原町荒神口角荒神町116","075-221-3443","9:30～18:30","日曜日・祝日","―",35.0213271,135.7695124,0,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルステージ マルヤス","京都市中京区西ノ京小倉町4","075-841-4291","9:00～19:00","不定休","http://www.maruyasu.club/",35.008547,135.739792,5,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都 eco トリップ","京都市南区東九条室町58番地","075-691-0794","6:30～22:00","無休","https://www.kyoto-option.com/ ",34.9831337,135.7571465,3,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("イーサイクル京都","京都市下京区塩小路町522番地 ","075-354-5468","8:30～18:00","無休","https://e-cycle.kyoto/",34.988406,135.761287,4,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("ハッピーサイクル京都","京都市中京区観音堂町466番地 ","075-746-7942","8:30～18:00","無休","https://happy-cycle.kyoto/",35.0044921,135.7574851,3,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("～京のレンタサイクルるぽるぽ～京都市鴨東駐車場","京都市東山区川端四条上る川端町181番地","075-551-2034","9:00～17:00（返却は20:00まで）","無休","http://www.kyotopublic.or.jp/rentacycle/",35.004121999999995,135.77248799999998,2,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("～京のレンタサイクルるぽるぽ～京都駅八条口駐車場","京都市南区東九条西山王町31番地 アバンティB2F","075-671-8947","9:00～17:00（返却は20:00まで）","無休","http://www.kyotopublic.or.jp/rentacycle/",34.983253999999995,135.760221,7,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("～京のレンタサイクルるぽるぽ～岡崎公園駐車場","京都市左京区岡崎最勝寺町63番地","075-761-9617","9:00～17:00（返却は20:00まで）","無休","http://www.kyotopublic.or.jp/rentacycle/",35.013754999999996,135.783167,4,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("～京のレンタサイクルるぽるぽ～北山駅自転車駐車場","京都市左京区下鴨半木町1番地の23","075-711-9690","9:00～17:00（返却は20:00まで）","無休","http://www.kyotopublic.or.jp/rentacycle/",35.051075,135.765053,1,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("清水自転車 常盤店","右京区常盤窪町15-20","075-872-8646","10:00～20:00","不定休","http://www.shimizu-bc.info/",35.0204818,135.70630119999998,1,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("清水自転車 花園店","右京区太秦安井小山町16","075-464-6661","10:00～20:00","不定休","http://www.shimizu-bc.info/",35.0196482,135.71991699999998,0,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都レンタサイクル ろうじ屋","京都市中京区西ノ京池ノ内町22-58","075-432-8494","8:00～11:00，16:00～21:00","なし","http://bike.kyotobase.com/",35.009227,135.74528600000002,4,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都岡崎 蔦屋書店","京都市左京区岡崎最勝寺町13 ロームシアター京都 パークプラザ1F","075-754-0008","8:00～22:00（レンタサイクルは20:00まで）","なし","http://real.tsite.jp/kyoto-okazaki/",35.013957,135.78053,0,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("阪急西院駐輪センター","京都市右京区西院高山寺町16-1","075-315-3088","6:30～23:30","12月31日～1月3日","http://www.hankyu.co.jp/",35.0032641,135.7310134,5,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("阪急桂駐輪センター","京都市西京区桂野里町17番地","075-381-3335","6:30～23:30","12月31日～1月3日","http://www.hankyu.co.jp/",34.980318700000005,135.7036631,5,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("阪急洛西口駐輪センター","京都市西京区川島六ノ坪町59-2","075-391-6681","6:30～23:30","12月31日～1月3日","http://www.hankyu.co.jp/",34.963947999999995,135.7034435,4,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("阪急レンタサイクル嵐山","京都市西京区嵐山西一川町","075-882-1112","11月～4月：9:00～17:00，5月～10月：9:00～18:00","なし","http://www.hankyu.co.jp/",35.010662200000006,135.6809748,4,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("山田モーター商会","京都市中京区西ノ京南聖町１","075-841-3113","9:00～19:00","日曜日","https://blogs.yahoo.co.jp/yamadamotor/",35.00863270000001,135.74430669999998,1,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("トロッコおじさんのレンタサイクル トロッコ嵯峨駅店","京都市右京区嵯峨天竜寺車道町","075-881-4898","9:00～17:00","年末年始，社内行事日","https://www.sagano-kanko.co.jp/",35.018572999999996,135.679662,0,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("J-cycle 高辻店","京都市下京区燈籠町570番地 京都東洞院高辻ビルＢ1Ｆ","075-341-3196","10:00～19:00","12月30日～1月3日","http://www.j-cycle.com/",35.00028,135.761007,5,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都五条サイクル","京都市下京区西橋詰町795-4","075-746-4855","9:00～19:00（レンタルは18:00まで）","水曜日","http://www.gojo-cycle.com",34.996623,135.766946,5,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("Kon's CYCLE from H","京都市中京区蛸薬師通富小路東入油屋町141　オクトヒル1F","075-231-3011","10:00～19:00","12/30～1/3，お盆2日間は休業","https://konscycle.com",35.006023,135.76523799999998,4,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("自転車のきゅうべえ　下鴨店","京都市左京区下鴨松ノ木町71-2","075-722-0766","10:00～20:00","年末年始のみ休業","http://city.qbei.co.jp/shop/shimogamo/",35.041284000000005,135.771288,0,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("自転車のきゅうべえ　二条店","京都市中京区西ノ京栂ノ尾町119","075-803-1113","10:00～20:00","年末年始のみ休業","http://city.qbei.co.jp/shop/nijo/",35.009206,135.74096799999998,6,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("自転車のきゅうべえ　西院店","京都市右京区西院平町11","075-754-6742","10:00～20:00","年末年始のみ休業","http://city.qbei.co.jp/shop/saiin/",35.000858,135.73221999999998,4,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("京都見聞録","京都市東山区祇園町南側５７０?５１","090-7117-0410","9:00～20:00","不定休","―",35.000907,135.7773,5,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("両替町サイクル","京都市中京区両替町通三条上る柿本町400","075-255-7227","10:00～18:00","不定休","http://kyoto.bike",35.009468,135.758659,7,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("Ｂａｎｊａ","京都市右京区京北下熊田町杉ノ谷31","075-855-1700","9:00～18:00","年末年始，お盆","https://banja-kyoto.com",35.162529,135.605416,0,0);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("五右衛門","京都市右京区京北下熊田町泓ケ2","075-855-1700","9:00～18:00","年末年始，お盆","https://banja-kyoto.com",35.163426,135.60574599999998,7,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("Ｔｈｅ Terminal KYOTO","京都市下京区新町通仏光寺下ル岩戸山町424番地","075-344-2544","9:00～18:00","無休","https://kyoto.theterminal.jp/sightseeing/",35.000712,135.756886,3,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ二条店","京都市中京区西ノ京南聖町１３","803-0577","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",35.00965,135.74335200000002,2,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ北大路店","京都市左京区下鴨上川原町３８","708-1530","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",35.044018,135.765199,5,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ桂店","京都市西京区桂徳大寺北町２","382-2571","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",34.991359,135.704316,7,1);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ西陣店","京都市上京区大宮通今出川下る薬師町２２６番２","417-1077","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",35.029627000000005,135.74854299999998,7,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ九条店","京都市南区東九条下殿田町４３","693-9785","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",34.979735,135.757597,7,4);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("サイクルベースあさひ洛西口店","京都市西京区川島六ノ坪町２９－２","382-2131","11:00～20:00（土日祝10:00～20:00）","不定休","https://store.cb-asahi.co.jp/",34.965359,135.703136,1,3);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("THE GOOD DAY VELO","京都市中京区堺町通姉小路下る大阪材木町６８５－１","606-5345","9:00～18:00","毎週月曜日,第３日曜日,年末年始","http://www.thegooddayvelo.com/",35.009704,135.763146,2,2);
INSERT INTO shop (name, address, tel, opening, holiday, URL, lat, lon, stock, available) VALUES ("Bird Hostel","京都市中京区常真横町１９０","774-1875","8:00～23:00","無休","https://www.birdhostel.com",35.017486,135.758738,1,4);

SELECT * FROM shop;