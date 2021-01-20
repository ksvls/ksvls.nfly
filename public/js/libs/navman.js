$(document).ready(()=>{$(".nav-toggler").each((_, navToggler)=>{
      $(navToggler).on('click',()=>{$($(navToggler).data('target')).animate({height: "toggle"})})})})
