<?php

include 'head.html';
include 'common.php';

$posts = get_posts();
$site = get_site_info();

?>

<?php $posts[0]->to_header(); ?>
<aside id="main">
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-8 mx-auto mb-3">
        <?php $posts[1]->to_md_box(); ?>
      </div>
      <div class="col-lg-4 mx-auto mb-3">
        <?php $posts[2]->to_box(); ?>
      </div>
    </div>
  </div>
</aside>

<aside>
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-4 mx-auto mb-3">
        <?php $posts[3]->to_box(); ?>
      </div>
      <div class="col-lg-8 mx-auto mb-3">
        <?php $posts[4]->to_md_box(); ?>
      </div>
    </div>
  </div>
</aside>

<!-- <section class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-uppercase"><strong>More Resources</strong></h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      {% for post in site.posts offset:5 limit:3 %}
      <div class="col-md-4 mb-1">
        <a class="article-box mt-5 mx-auto sr-article-box" href="{{ post.url | relative_url }}">
          <img src="{{ post.thumb | relative_url }}" alt="{{ post.title | escape }}">
          <div class="category">{{ post.type | escape }}</div>
          <div class="description">
            <h4 class="mb-3">{{ post.title | escape }}</h4>
            <p class="text-muted mb-0">{{ post.preview | truncatewords: 18 }}</p>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</section> -->

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
