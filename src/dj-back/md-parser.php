<?php

include 'p.php';

function parse_file($fname) {
  $file = fopen("_posts/".$fname, "r") or die("Unable to open file!");

  $t_line; $t_title; $t_date; $t_type; $t_img; $t_auth; $t_prev; $t_str;
  $t_block = array(); $t_body = array();

  while(!feof($file)) {
    $t_line = fgets($file);

    if(strpos($t_line,'title:') === 0) {
      $t_title = trim(substr($t_line, 6));
    } else if(strpos($t_line, 'date:') === 0) {
      $t_date = trim(substr($t_line, 5));
    } else if(strpos($t_line, 'type:') === 0) {
      $t_type = trim(substr($t_line, 5));
    } else if(strpos($t_line, 'header:') === 0) {
      $t_img = trim(substr($t_line, 35));
    } else if(strpos($t_line, 'author:') === 0) {
      $t_auth = trim(substr($t_line, 7));
    } else if(strpos($t_line, 'preview:') === 0) {
      $t_prev = trim(substr($t_line, 8));
    } else if(strpos($t_line, '<p class="quote">') === 0) {
      $t_str = "q";
      array_push($t_block, $t_str);
      $t_str = trim(str_replace("</p>", "", substr($t_line, 17)));
      array_push($t_block, $t_str);
      array_push($t_body, $t_block);
      $t_block = array();
    } else if(strpos($t_line, '<p>') === 0) {
      $t_str = "p";
      array_push($t_block, $t_str);
      $t_str = trim(str_replace("</p>", "", substr($t_line, 3)));
      array_push($t_block, $t_str);
      array_push($t_body, $t_block);
      $t_block = array();
    } else if(strpos($t_line, '<hr>') === 0) {
      $t_str = "hr";
      array_push($t_block, $t_str);
      $t_str = "";
      array_push($t_block, $t_str);
      array_push($t_body, $t_block);
      $t_block = array();
    }
  }

  $p = new Post($t_title,$t_type,$t_auth,$t_date,$t_prev,$t_body,$t_img);
  return $p;
}

function parse_all($flist) {
  $posts = array();

  foreach ($flist as $f) {
    array_push($posts, parse_file($f));
  }
  $posts = json_encode($posts);

  $posts = preg_replace_callback('/\\\\u([0-9a-fA-F]{4})/',
    function ($match) {
      return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
    }, $posts);

  echo $posts;
}

$file_list = array('2017-08-22-good-news-of-great-joy.md',
  '2017-09-19-life-giving-breath.md',
  '2017-09-20-humble-service.md',
  '2017-10-03-our-cloud-of-witnesses.md',
  '2017-10-18-future-hope.md',
  '2017-10-22-the-immeasurable-greatness-of-gods-power.md',
  '2017-10-23-the-love-of-christ.md',
  '2017-11-07-the-lamb-who-is-worthy.md',
  '2017-11-20-the-supreme-gift-giver.md',
  '2017-11-25-broken-and-clean.md',
  '2017-12-01-the-fountain-of-all-joy.md',
  '2017-12-15-he-wields-all.md',
  '2017-12-25-light-dwells-with-him.md',
  '2017-12-29-a-lunchtime-prayer.md',
  '2017-12-31-does-god-keep-his-promises.md',
  '2018-01-07-trinitarian-prayer-before-worship.md',
  '2018-01-07-unity-amidst-diversity.md',
  '2018-01-10-sufficient-grace-in-exhausting-ministry.md',
  '2018-01-20-as-far-as-the-curse-is-found.md',
  '2018-01-21-a-prayer-to-begin-the-work-week.md',
  '2018-02-05-gods-good-pleasure.md',
  '2018-02-07-the-unlikely-messenger.md',
  '2018-02-12-joy-in-his-prescence.md',
  '2018-02-14-the-fount-of-faithfulness.md',
  '2018-02-21-the-foundation-of-fellowship.md',
  '2018-01-14-a-congregational-prayer-for-unity.md'
);

parse_all($file_list);

?>
