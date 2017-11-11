<?php
exit();
?>
<html>
  <head><title>PHP OpenID Authentication Example</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="author" content="?唬葉撣??脩雯頝臭葉敹?axer@tc.edu.tw" />
  <meta name="description" content="?唬葉撣??脩雯頝臭葉敹PENID撋蝬脤?蝭?蝔?" />
  </head>
  <body>
    <h2>?唬葉撣??脩雯頝臭葉敹PENID撋蝬脤?PHP蝭?蝔?<br /><small>TC Network center PHP OpenID Authentication Example</smll></h2>
    <p style="font-size:11pt;color: #555;">- ??蝭??孵神??a href="http://github.com/openid/php-openid"> PHP OpenID library</a><br />
       - ?祉?靘??銝剖??踹??撅?砍?撣唾?雿輻<br />
       - 隤?摰敺??鞈???sup>1</sup>?典? <sup>2</sup>Email <sup>3</sup>摮豢???<sup>4</sup>摮豢??<sup>5</sup>?瑞迂 蝑?br />
    </p>

    <div style="border-width:1px; border-color:black;  padding:3px; font-size:15px;">
      <form method="get" action="authcontrol.php">
        隢撓?乩???董??br />
        <input type="hidden" name="action" value="verify" />
        <input type="hidden" name="domain" value="tc" />
        <span style="color:#777;">http://<input type="text" name="openid_identifier" value="" size="12" maxlength="16" />.openid.tc.edu.tw</span>
        <input type="submit" value=" 隞亙?董???" />
      </form>
    </div>
    <div style="color:#CC7300; font-size:15px;"><?php if(!empty($message)) print $message;  ?></div>

  </body>
</html>
