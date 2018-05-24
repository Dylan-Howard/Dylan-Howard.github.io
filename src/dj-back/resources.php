<?php

include 'head.html';
include 'common.php';

$site = get_site_info();
$pnum = 1;
$cata = "";

if(isset($_GET['page'])) {
  if($_GET['page'] > 0) {
    $pnum = $_GET['page'];
  }
}
if(isset($_GET['catagory'])) {
  $cata = $_GET['catagory'];
}

$posts = get_posts($cata);
$page = array();

for ($i = ($pnum-1)*10; $i < $pnum*10 && $i < count($posts); $i++) {
  array_push($page,$posts[$i]);
}

?>

<section>
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-12 mx-auto mb-3">
        <h2 class="section-heading">
          <?php
            if($cata === "") {
              echo "All Resources";
            } else {
              echo $cata;
            }
          ?>
        </h2>
        <hr>
        <div id="search-wrapper">
          <i class="search-icon fa fa-search"></i>
          <input type="text" id="search" placeholder="Search resources...">
          <div class="search-tags">
            <a class="search-tag" data-tag="Meditation">Meditation</a>
            <a class="search-tag" data-tag="Sermon">Sermon</a>
            <a class="search-tag" data-tag="Prayer">Prayer</a>
            <a class="search-tag" data-tag="Devotion">Devotion</a>
            <a class="search-tag" data-tag="Article">Article</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="resources">
      <?php
        foreach ($page as $p) {
          echo "<div class=\"col-sm-6 mx-auto mb-3\">";
          $p->to_md_box();
          echo "</div>";
        }
      ?>
    </div>
    <hr class="my-4">
    <div class="page-btn-bar">
      <?php
      echo "$pnum";
        if($pnum < 3) { $i = 1; } else { $i = $pnum-2; }
        for($i; $i < $pnum+3 && $i < count($posts)/10; $i++) {
          echo "<a class=\"page-btn\" href=\"resources.php?page=$i\">$i</a>";
          if($i > count($posts)/10 - 1 && fmod(count($posts),10) <> 0) {
            $i++;
            echo "<a class=\"page-btn\" href=\"resources.php?page=$i\">$i</a>";
          }
        }
      ?>
    </div>
  </div>
</section>

<section class="bg-primary" id="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="section-heading text-white">Our Purpose</h2>
        <hr class="light my-4">
        <p class="text-faded mb-4"><?php echo $site->get_description(); ?></p>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="section-heading">Let's Get In Touch!</h2>
        <hr class="my-4">
        <p class="mb-5">Have feedback on some content? Maybe a question related to a resource? Send me an email and I will get back to you as soon as possible!</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mx-auto text-center">
        <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
        <p>
          <a href="mailto:<?php echo $site->get_email();?>"><?php echo $site->get_email(); ?></a>
        </p>
      </div>
    </div>
  </div>
</section>

<?php include 'foot.html'; ?>
