//変数宣言
//解説文を取得
let explainText = document.getElementById('explain');
//敵の画像を取得
let enemyPic = document.getElementById('enemy1pic')
//？マークを取得
let enemyhand = document.getElementById('enHand');
//敵と味方のHP
let hp = 5;
let enemyhp1 = 3;

//手の画像を変数にして置いておく
const rockUrl = 'https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png';
const scissorshandUrl = 'https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png';
const paperhandUrl = 'https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s800/janken_pa.png';

//グーを押したときの処理
$('#rockhand').on('click', function () {
    console.log(1);
    $('#playerhp').html('HP :' + hp);
    let num = Math.ceil(Math.random() * 3);
    let EnemyHand = rockUrl;
    if (num === 1) {
        EnemyHand = rockUrl;
        $('#explain').html('あいこ');
    }
    else if (num === 2) {
        EnemyHand = scissorshandUrl;
        win();
    }
    else {
        EnemyHand = paperhandUrl;
        defeat();
    }
    enemyhand.src = EnemyHand;
})

//チョキを押したときの処理
$('#scissorshand').on('click', function () {
    console.log(2);
    let num = Math.ceil(Math.random() * 3);
    let EnemyHand = rockUrl;
    if (num === 1) {
        EnemyHand = rockUrl;
        defeat();
    }
    else if (num === 2) {
        EnemyHand = scissorshandUrl;
        $('#explain').html('あいこ');
    }
    else {
        EnemyHand = paperhandUrl;
        win();
    }
    enemyhand.src = EnemyHand;
})

//パーを押したときの処理
$('#paperhand').on('click', function () {
    console.log(3);
    let num = Math.ceil(Math.random() * 3);
    let EnemyHand = rockUrl;
    if (num === 1) {
        EnemyHand = rockUrl;
        win();
    }
    else if (num === 2) {
        EnemyHand = scissorshandUrl;
        defeat();
    }
    else {
        EnemyHand = paperhandUrl;
        $('#explain').html('あいこ');
    }
    enemyhand.src = EnemyHand;
})


//勝ったとき相手のHPを減らし、勝ちを表示する。
function win() {
    $('#explain').html('勝ち！');
    enemyhp1--;
    $('#enemyHp').html('HP :' + enemyhp1);
    if (enemyhp1 === 0) {
        $('#enemy1').fadeOut();
        setTimeout(() => {
            enemyPic.src = "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG2ZbYGCyLpR5USnqNmgnrubG2eS9ra12f_cClqxFaU7sEVqSRX-bm7hsp208PQC783uD86aV1fkQUVTXoCFMePV8C3Dn0FHqrJ9WXsIv3ilMktG82LT7BXa7sHke8SJXEdKA8eQp0NjmpmtQEn0IWO3sb-glmswMkzRZDc9TE5tOtqHiuGuBlSPeVXYGYFyQJna2tppqMdkF9e4K-wa-lAB-sdbuzxN4RY9bUJfTnpyt/1452.jpg?errorImage=false";
        }, 2000);
        setTimeout(() => {
            enemyhp1 = 100;
            $('#enemyHp').html('HP :' + enemyhp1);
        }, 2000);
    }
}

//負けたとき
function defeat() {
    $('#explain').html('負け…')
    hp--;
    $('#playerhp').html('HP :' + hp);
    if (hp === 0) {
        setTimeout(() => {
            location.reload();
        }, 1000);

    }
}