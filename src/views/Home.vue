<template>
    <my-page title="历史朝代表">
        <table class="ui-table history-table">
            <tbody>
            <tr class="bg">
                <th colspan="3">朝代</th>
                <th>存在时间</th>
                <th>都城</th>
                <th>今地</th>
                <th><small>统治</small></th>
                <th>创立者</th>
            </tr>
            <tr>
                <td colspan="8">三皇[伏羲、燧人、神农] 五帝[黄帝、颛顼、帝喾、唐尧、虞舜]</td>
            </tr>
            <tr class="bg">
                <td colspan="3">夏朝</td>
                <td>前2146-1675年</td>
                <td>安邑</td>
                <td>山西夏县</td>
                <td>华夏族</td>
                <td>禹姒文命</td>
            </tr>
            <tr>
                <td colspan="3">商朝</td>
                <td>前1675-1029年</td>
                <td>亳</td>
                <td>河南商丘</td>
                <td>华夏族</td>
                <td>武王商汤</td>
            </tr>
            <tr class="bg">
                <td rowspan="3" width="13">周</td>
                <td colspan="2">西周</td>
                <td>前1029-771年</td>
                <td>镐京</td>
                <td>陕西西安</td>
                <td>华夏族</td>
                <td>周文王姬昌</td>
            </tr>
            <tr class="bg">
                <td rowspan="2" width="25">东周</td>
                <td width="25">春秋</td>
                <td>前770-476年</td>
                <td>洛邑</td>
                <td>河南洛阳</td>
                <td width="38">华夏族</td>
                <td>周平王姬宜臼</td>
            </tr>
            <tr class="bg">
                <td>战国</td>
                <td>前475-221年</td>
                <td>　</td>
                <td>　</td>
                <td>华夏族</td>
                <td>　</td>
            </tr>
            <tr>
                <td colspan="3">秦朝</td>
                <td>前221-207年</td>
                <td>咸阳</td>
                <td>陕西咸阳</td>
                <td>华夏族</td>
                <td>始皇帝嬴政</td>
            </tr>
            <tr class="bg">
                <td rowspan="3">汉</td>
                <td colspan="2">西汉</td>
                <td>前206-公元8年</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>汉族</td>
                <td>高祖刘邦</td>
            </tr>
            <tr class="bg">
                <td colspan="2">新朝</td>
                <td>9-23年</td>
                <td>常安</td>
                <td>陕西西安</td>
                <td>汉族</td>
                <td>新帝王莽</td>
            </tr>
            <tr class="bg">
                <td colspan="2">东汉</td>
                <td>25-220年</td>
                <td>洛阳</td>
                <td>河南洛阳</td>
                <td>汉族</td>
                <td>光武帝刘秀</td>
            </tr>
            <tr>
                <td rowspan="3">三国</td>
                <td colspan="2">曹魏</td>
                <td>220-265年</td>
                <td>洛阳</td>
                <td>河南洛阳</td>
                <td>汉族</td>
                <td>魏文帝曹丕</td>
            </tr>
            <tr>
                <td colspan="2">蜀汉</td>
                <td>221-263年</td>
                <td>成都</td>
                <td>四川成都</td>
                <td>汉族</td>
                <td>昭烈皇帝刘备</td>
            </tr>
            <tr>
                <td colspan="2">孙吴</td>
                <td>222-280年</td>
                <td>建业</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>吴大帝孙权</td>
            </tr>
            <tr class="bg">
                <td rowspan="2">晋</td>
                <td colspan="2">西晋</td>
                <td>265-316</td>
                <td>洛阳</td>
                <td>河南洛阳</td>
                <td>汉族</td>
                <td>晋武帝司马炎</td>
            </tr>
            <tr class="bg">
                <td colspan="2">东晋</td>
                <td>317-420</td>
                <td>建康</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>晋元帝司马睿</td>
            </tr>
            <tr>
                <td rowspan="20">十六国<br />
                    304-439</td>
                <td rowspan="2" colspan="2">前赵(汉赵)</td>
                <td>304-318</td>
                <td>平阳</td>
                <td>山西临汾</td>
                <td rowspan="2">匈奴族</td>
                <td rowspan="2">高祖光文皇帝刘渊</td>
            </tr>
            <tr>
                <td>319-329</td>
                <td>长安</td>
                <td>陕西西安</td>
            </tr>
            <tr>
                <td colspan="2">成汉</td>
                <td>306-347</td>
                <td>成都</td>
                <td>四川成都</td>
                <td>巴氐族</td>
                <td>太宗武皇帝李雄</td>
            </tr>
            <tr>
                <td colspan="2">前凉</td>
                <td>314-363</td>
                <td>姑臧</td>
                <td>甘肃武威</td>
                <td>汉族</td>
                <td>高祖明王张寔</td>
            </tr>
            <tr>
                <td colspan="2">后赵</td>
                <td>319-351</td>
                <td>襄国</td>
                <td>河北邢台</td>
                <td>羯族</td>
                <td>高祖明皇帝石勒</td>
            </tr>
            <tr>
                <td colspan="2">前燕</td>
                <td>337-370</td>
                <td>龙城</td>
                <td>辽宁朝阳</td>
                <td>鲜卑族</td>
                <td>太祖文明皇帝慕容皝</td>
            </tr>
            <tr>
                <td colspan="2">前秦</td>
                <td>351-394</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>氐族</td>
                <td>世宗明皇帝符健</td>
            </tr>
            <tr>
                <td colspan="2">后秦</td>
                <td>384-417</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>羌族</td>
                <td>太祖武昭皇帝姚苌</td>
            </tr>
            <tr>
                <td colspan="2">后燕</td>
                <td>384-407</td>
                <td>中山</td>
                <td>河北定州</td>
                <td>鲜卑族</td>
                <td>世祖成武皇帝慕容垂</td>
            </tr>
            <tr>
                <td colspan="2">西秦</td>
                <td>385-431</td>
                <td>苑川</td>
                <td>甘肃榆中</td>
                <td>鲜卑族</td>
                <td>烈祖宣烈王乞伏国仁</td>
            </tr>
            <tr>
                <td colspan="2">后凉</td>
                <td>386-403</td>
                <td>略阳</td>
                <td>甘肃平凉</td>
                <td>氐族</td>
                <td>太祖懿武皇帝吕光</td>
            </tr>
            <tr>
                <td colspan="2">南凉</td>
                <td>397-414</td>
                <td>西平</td>
                <td>青海西宁</td>
                <td>鲜卑族</td>
                <td>烈祖武王拓跋乌孤</td>
            </tr>
            <tr>
                <td colspan="2">南燕</td>
                <td>398-410</td>
                <td>广固</td>
                <td>山东益都</td>
                <td>鲜卑族</td>
                <td>世宗献武皇帝慕容德</td>
            </tr>
            <tr>
                <td colspan="2">西凉</td>
                <td>407-421</td>
                <td>酒泉</td>
                <td>甘肃酒泉</td>
                <td>汉族</td>
                <td>太祖昭武王李暠</td>
            </tr>
            <tr>
                <td colspan="2">胡夏</td>
                <td>407-431</td>
                <td>统万城</td>
                <td>陕西靖边</td>
                <td>匈奴</td>
                <td>世祖烈武皇帝赫连勃勃</td>
            </tr>
            <tr>
                <td colspan="2">北燕</td>
                <td>407-436</td>
                <td>和龙</td>
                <td>辽宁朝阳</td>
                <td>高句丽</td>
                <td>燕惠懿帝高云</td>
            </tr>
            <tr>
                <td colspan="2">北凉</td>
                <td>397-439</td>
                <td>张掖</td>
                <td>甘肃张掖</td>
                <td>卢水胡</td>
                <td>太祖武宣王沮渠蒙逊</td>
            </tr>
            <tr>
                <td colspan="2">*冉魏</td>
                <td>350-352</td>
                <td>邺城</td>
                <td>河北临漳</td>
                <td>汉族</td>
                <td>武悼天王冉闵</td>
            </tr>
            <tr>
                <td colspan="2">*西燕</td>
                <td>384-394</td>
                <td>长子</td>
                <td>山西长子</td>
                <td>鲜卑族</td>
                <td>济北王慕容泓</td>
            </tr>
            <tr>
                <td colspan="2">*西蜀(后蜀)</td>
                <td>405-413</td>
                <td>益州</td>
                <td>四川成都</td>
                <td>汉族</td>
                <td>谯纵</td>
            </tr>
            <tr class="bg">
                <td rowspan="10">南北朝<br />
                    420-589</td>
                <td rowspan="4">南朝</td>
                <td>宋</td>
                <td>420-479</td>
                <td>建康</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>宋武帝刘裕</td>
            </tr>
            <tr class="bg">
                <td>齐</td>
                <td>479-502</td>
                <td>建康</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>齐高帝萧道成</td>
            </tr>
            <tr class="bg">
                <td>梁</td>
                <td>502-557</td>
                <td>建康</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>梁武帝萧衍</td>
            </tr>
            <tr class="bg">
                <td>陈</td>
                <td>557-589</td>
                <td>建康</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>陈武帝陈霸先</td>
            </tr>
            <tr>
                <td rowspan="6">北朝</td>
                <td rowspan="2">北魏</td>
                <td rowspan="2">386-534</td>
                <td>平城</td>
                <td>山西大同</td>
                <td rowspan="2">鲜卑族</td>
                <td rowspan="2">魏道武帝拓跋珪</td>
            </tr>
            <tr>
                <td>洛阳</td>
                <td>河南洛阳</td>
            </tr>
            <tr>
                <td>东魏</td>
                <td>534-550</td>
                <td>邺</td>
                <td>河北临漳</td>
                <td>鲜卑族</td>
                <td>魏孝静帝元善见</td>
            </tr>
            <tr>
                <td>西魏</td>
                <td>535-556</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>鲜卑族</td>
                <td>魏文帝元宝炬</td>
            </tr>
            <tr>
                <td>北齐</td>
                <td>550-577</td>
                <td>邺</td>
                <td>河北临漳</td>
                <td>鲜卑族</td>
                <td>齐文宣帝高洋</td>
            </tr>
            <tr>
                <td>北周</td>
                <td>557-581</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>鲜卑族</td>
                <td>周孝闵帝宇文觉</td>
            </tr>
            <tr class="bg">
                <td colspan="3">隋朝</td>
                <td>581-618</td>
                <td>大兴</td>
                <td>陕西西安</td>
                <td>汉族</td>
                <td>隋文帝杨坚</td>
            </tr>
            <tr>
                <td colspan="3">唐朝</td>
                <td>618-907</td>
                <td>长安</td>
                <td>陕西西安</td>
                <td>汉族</td>
                <td>唐高祖李渊</td>
            </tr>
            <tr>
                <td rowspan="15" class="bg">五代十国</td>
                <td colspan="2">后梁</td>
                <td>907-923</td>
                <td>汴</td>
                <td>河南开封</td>
                <td>汉族</td>
                <td>梁太祖朱晃</td>
            </tr>
            <tr>
                <td colspan="2">后唐</td>
                <td>923-936</td>
                <td>洛阳</td>
                <td>河南洛阳</td>
                <td>汉族</td>
                <td>唐庄宗李存勖</td>
            </tr>
            <tr>
                <td colspan="2">后晋</td>
                <td>936-947</td>
                <td>汴</td>
                <td>河南开封</td>
                <td>汉族</td>
                <td>晋高祖石敬瑭</td>
            </tr>
            <tr>
                <td colspan="2">后汉</td>
                <td>947-950</td>
                <td>汴</td>
                <td>河南开封</td>
                <td>汉族</td>
                <td>汉高祖刘暠</td>
            </tr>
            <tr>
                <td colspan="2">后周</td>
                <td>951-960</td>
                <td>汴</td>
                <td>河南开封</td>
                <td>汉族</td>
                <td>周太祖郭威</td>
            </tr>
            <tr class="bg">
                <td colspan="2">前蜀</td>
                <td>891-925</td>
                <td>成都</td>
                <td>四川成都</td>
                <td>汉族</td>
                <td>高祖王建</td>
            </tr>
            <tr class="bg">
                <td colspan="2">后蜀</td>
                <td>925-965</td>
                <td>成都</td>
                <td>四川成都</td>
                <td>汉族</td>
                <td>高祖孟知祥</td>
            </tr>
            <tr class="bg">
                <td colspan="2">杨吴</td>
                <td>892-937</td>
                <td>扬州</td>
                <td>江苏扬州</td>
                <td>汉族</td>
                <td>太祖杨行密</td>
            </tr>
            <tr class="bg">
                <td colspan="2">南唐</td>
                <td>937-975</td>
                <td>金陵</td>
                <td>江苏南京</td>
                <td>汉族</td>
                <td>烈祖李昪</td>
            </tr>
            <tr class="bg">
                <td colspan="2">吴越</td>
                <td>893-978</td>
                <td>杭州</td>
                <td>浙江杭州</td>
                <td>汉族</td>
                <td>武肃王钱鏐</td>
            </tr>
            <tr class="bg">
                <td colspan="2">闽国</td>
                <td>893-945</td>
                <td>长乐</td>
                <td>福建福州</td>
                <td>汉族</td>
                <td>太祖王审知</td>
            </tr>
            <tr class="bg">
                <td colspan="2">马楚</td>
                <td>896-951</td>
                <td>长沙</td>
                <td>湖南长沙</td>
                <td>汉族</td>
                <td>武穆王马殷</td>
            </tr>
            <tr class="bg">
                <td colspan="2">南汉</td>
                <td>905-971</td>
                <td>兴王府</td>
                <td>广东广州</td>
                <td>汉族</td>
                <td>高祖刘龑</td>
            </tr>
            <tr class="bg">
                <td colspan="2">南平</td>
                <td>907-963</td>
                <td>荆州</td>
                <td>湖北荆州</td>
                <td>汉族</td>
                <td>武信王高季兴</td>
            </tr>
            <tr class="bg">
                <td colspan="2">北汉</td>
                <td>951-979</td>
                <td>太原</td>
                <td>山西太原</td>
                <td>汉族</td>
                <td>世祖刘崇</td>
            </tr>
            <tr>
                <td rowspan="2">宋</td>
                <td colspan="2">北宋</td>
                <td>960-1127</td>
                <td>开封</td>
                <td>河南开封</td>
                <td>汉族</td>
                <td>太祖赵匡胤</td>
            </tr>
            <tr>
                <td colspan="2">南宋</td>
                <td>1127-1279</td>
                <td>临安</td>
                <td>浙江临安</td>
                <td>汉族</td>
                <td>高宗赵构</td>
            </tr>
            <tr class="bg">
                <td colspan="3">辽国</td>
                <td>907-1125</td>
                <td>皇都</td>
                <td>辽宁</td>
                <td>契丹族</td>
                <td>太祖耶律阿保机</td>
            </tr>
            <tr>
                <td colspan="3">大理</td>
                <td>937-1254</td>
                <td>太和城</td>
                <td>云南大理</td>
                <td>白族</td>
                <td>太祖段思平</td>
            </tr>
            <tr class="bg">
                <td class="bg" colspan="3">西夏</td>
                <td>1032-1227</td>
                <td>兴庆府</td>
                <td>宁夏银川</td>
                <td>党项族</td>
                <td>景帝李元昊</td>
            </tr>
            <tr>
                <td rowspan="3" colspan="3">金</td>
                <td rowspan="3">1115-1234</td>
                <td>会宁</td>
                <td>阿城(黑)</td>
                <td rowspan="3">女真族</td>
                <td rowspan="3">金太祖阿骨打</td>
            </tr>
            <tr>
                <td>中都</td>
                <td>北京</td>
            </tr>
            <tr>
                <td>开封</td>
                <td>河南开封</td>
            </tr>
            <tr class="bg">
                <td colspan="3">元朝</td>
                <td>1206-1368</td>
                <td>大都</td>
                <td>北京</td>
                <td>蒙古族</td>
                <td>元世祖忽必烈</td>
            </tr>
            <tr>
                <td colspan="3">明朝</td>
                <td>1368-1644</td>
                <td>北京</td>
                <td>北京</td>
                <td>汉族</td>
                <td>明太祖朱元璋</td>
            </tr>
            <tr class="bg">
                <td colspan="3">清朝</td>
                <td>1616-1911</td>
                <td>北京</td>
                <td>北京</td>
                <td>满族</td>
                <td>清太宗皇太极</td>
            </tr>
            <tr>
                <td colspan="3">中华民国</td>
                <td>1912-1949</td>
                <td>南京</td>
                <td>南京</td>
                <td>&nbsp;</td>
                <td>临时大总统孙中山</td>
            </tr>
            <tr class="bg">
                <td colspan="8">中华人民共和国1949年10月1日成立，首都北京。</td>
            </tr>
            </tbody>
        </table>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
</style>
