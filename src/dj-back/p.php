<?php

/**
 *
 */
class Post
{

  public $title;
  public $post_type;
  public $author;
  public $date;
  public $preview;
  public $body;
  public $img;

  function __construct($title, $post_type, $author, $date, $preview, $body, $img)
  {
    $this->title = $title;
    $this->post_type = $post_type;
    $this->author = $author;
    $this->date = $date;
    $this->preview = $preview;
    $this->body = $body;
    $this->img = $img;
  }

  function to_header() {
    echo "
    <header class=\"masthead text-center text-white d-flex\" style=\"background-image: url('./img/full/$this->img');\">
      <div class=\"over\"></div>
      <div class=\"container my-auto\">
        <div class=\"row\">
          <div class=\"col-lg-10 mx-auto\">
            <h1 class=\"text-uppercase\">
              <strong>$this->title</strong>
            </h1>
            <p class=\"text-faded text-uppercase mb-1\">$this->post_type</p>
            <hr class=\"light\">
          </div>
          <div class=\"col-lg-8 mx-auto\">
            <p class=\"text-faded mb-5\">$this->preview</p>
            <a class=\"btn btn-light btn-xl\" href=\"{$this->get_link()}\">Read more</a>
          </div>
          <div class=\"down-wrap\">
            <a class=\"down-inner js-scroll-trigger\" href=\"#main\"><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></a>
          </div>
        </div>
      </div>
    </header>";
  }

  function to_md_box() {
    echo "
    <a class=\"article-box article-box-md\" href=\"{$this->get_link()}\">
      <div class=\"over\"></div>
      <img src=\"./img/full/$this->img\" alt=\"$this->title\">
      <div class=\"category\">$this->post_type</div>
      <div class=\"description\">
        <h4>$this->title</h4>
        <p class=\"text-faded mob-muted\">{$this->get_preview()}</p>
      </div>
    </a>";
  }

  function to_box() {
    echo "
    <a class=\"article-box\" href=\"{$this->get_link()}\">
      <img src=\"./img/thumb/$this->img\" alt=\"$this->title\">
      <div class=\"category\">$this->post_type</div>
      <div class=\"description\">
        <h4>$this->title</h4>
        <p class=\"text-muted\">{$this->get_preview()}</p>
      </div>
    </a>";
  }

  function to_body() {
    foreach ($this->body as $b) {
      switch($b[0]) {
        case 'p':
          echo "<p>";
          echo $b[1];
          echo "</p>";
          break;
        case 'q':
          echo "<p class=\"quote\">";
          echo $b[1];
          echo "</p>";
          break;
        case 'hr':
          echo "<hr>";
          break;
        default:
          // do nothing...
          break;
      }
    }
  }

  function get_preview() {
    $t_preview = $this->preview;
    $last_space = 0;

    for ($i=0; $i < 80; $i++) {
      if(strcmp(substr($t_preview,$i,1)," ")===0) {
        $last_space = $i+1;
      }
    }

    return substr($this->preview,0,$last_space);
  }

  function get_link() {
    return "post.php?title={$this->title}";
  }
}


?>
