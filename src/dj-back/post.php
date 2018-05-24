<?php

function get_post($p_title) {
  $posts = get_posts();
  foreach ($posts as $p) {
    if(strcmp($p->title, $p_title) === 0) {
      return $p;
    }
  }
}

/* Redirects if no title is passed */
if(! isset($_GET['title'])) {
  $newURL = 'index.php';
  header('Location: '.$newURL);
}

include 'head.html';
include 'common.php';

$post = get_post($_GET['title']);
$site = get_site_info();

$post->to_header();
?>

<!-- <div class="container-fluid">
  <div class="row no-gutter">
    <div class="col-lg-12">
      <audio controls>
        <source src="{{ page.audio }}" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
      <p>Listen to the <a href="{{ page.audio }}">.mp3</a></p>
    </div>
  </div>
</div> -->

<section id="article">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <?php $post->to_body(); ?>
      </div>
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
