<?php

include 'head.html';
include 'common.php';

$site = get_site_info();

?>

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
