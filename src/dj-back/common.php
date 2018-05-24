<?php

include 'p.php';
include 'site.php';

/* General Getters */

function get_posts() {

  $posts_file = json_decode(file_get_contents('./js/posts.json'),true);
  $posts = array();

  foreach ($posts_file as $p) {
    $t_post = new Post($p['title'],$p['post_type'],$p['author'],$p['date'],$p['preview'],$p['body'],$p['img']);
    array_push($posts,$t_post);
  }

  return array_reverse($posts);
}

function get_site_info() {
  $s = json_decode(file_get_contents('./js/site-info.json'),true);
  return new Site($s['title'],$s['description'],$s['email']);
}

?>
