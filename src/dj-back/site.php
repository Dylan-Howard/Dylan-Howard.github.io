<?php

/**
 *
 */
class Site
{

  private $title;
  private $description;
  private $email;

  function __construct($title, $description, $email)
  {
    $this->title = $title;
    $this->description = $description;
    $this->email = $email;
  }

  function get_title() {
    return $this->title;
  }

  function get_description() {
    return $this->description;
  }

  function get_email() {
    return $this->email;
  }
}


?>
