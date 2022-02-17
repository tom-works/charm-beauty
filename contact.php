
<?php include ( dirname(__FILE__) . '/header.php' ); ?>

<body>
<div class="contact-title">
<h1>お問い合わせ</h1>
</div>

<section class="contact-wrap">
<form action="" method="" class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-12 control-label" for="name1">名前</label>
    <div class="col-sm-12">
      <input type="text" class="form-control" name="">
    </div>
    </div>

    <div class="form-group">
      <label class="col-sm-12 control-label" for="name">フリガナ</label>
    <div class="col-sm-12">
       <input type="text" class="form-control" name="">
    </div>
    </div>

    <div class="form-group">
      <label class="col-sm-12 control-label" for="email">メールアドレス</label>
    <div class="col-sm-12">
      <input type="text" class="form-control" name="">
    </div>
    </div>

    <div class="form-group service">
      <label class="col-sm-12 control-label" for="ask1">対象のサービス<label>
    </div>
    <div class="col-sm-12">
    <label class="form-control-static radio-btns">
        <input class="radio-btn" type="radio" name="" value="">ヘアカット<br>
          <input type="radio" name="" value="">パーマ<br>
        <input type="radio" name="" value="">ヘアカラー<br>
        <input type="radio" name="" value="">着付け<br>
    </label>
    </div>
    </div>

    <div class="form-group contact-details">
      <label class="col-sm-12 control-label" for="ask1">お問い合わせ内容</label>
    <div class="col-sm-12">
    <textarea rows="7" name="" class="form-control"></textarea>
    </div>
    </div>

    <div class="form-group">
      <label class="col-sm-12"></label>
    <div class="col-sm-12">
       <button class="btn btn-default">送信する</button>
    </div>
    </div>
</form>
</section>



<?php include ( dirname(__FILE__) . '/footer.php' ); ?>
