import * as React from "react"
import { twMerge } from "tailwind-merge"

const html = `<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{color:black clear:left; font:14px Helvetica,Arial,sans-serif;  width:300px;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup" class="text-slate-300">
    <form action="https://jameskoppelcoaching.us16.list-manage.com/subscribe/post?u=8b565c97b838125f69e75fb7f&amp;id=bfbb2fb86b&amp;f_id=004c7be0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group ">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input class="text-black" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name (optional)</label>
	<input class="text-black"  type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group ">
	<label for="mce-LNAME">Last Name (optional)</label>
	<input class="text-black" type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group" style="display:none">
	<label for="mce-SOURCE">Source </label>
	<input type="text" value="note89.github.io" name="SOURCE" class="" id="mce-SOURCE">
</div>
	<div id="mce-responses" class="clear" style="padding-left: 0px; margin-left: 0px;">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response text-white" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8b565c97b838125f69e75fb7f_bfbb2fb86b" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="" class="text-black bg-orange-300 p-2"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='SOURCE';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
</link>`

export const Newsletter = ({ className }: { className: string }) => {
  return (
    <div
      className={twMerge(
        "bg-sky-700 flex items-center flex-col rounded p-10 text-center",
        className
      )}
    >
      <h1 className="text-slate-200">Join our Newsletter</h1>
      <p className="text-slate-200 max-w-[40ch]">
        Lessons on how to write better code directly in your inbox.{" "}
        <b>
          Sign up and receive a free copy of 7 Mistakes That Cause Fragile Code.
        </b>
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  )
}
