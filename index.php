<?php get_header(); ?>
<div class="container" role="document">
	<div class="row fullW">
		<?php get_sidebar('blog'); ?>
		<!-- Row for main content area -->
			<div class="small-12 large-8 columns" id="content" role="main">
				<?php if (have_posts()) : ?>
				<?php /* Start the Loop */ ?>
				<?php while (have_posts()) : the_post(); ?>
					<?php get_template_part('content', get_post_format()); ?>
				<?php endwhile; ?>
				<?php else : ?>
					<?php get_template_part('content', 'none'); ?>
				<?php endif; // end have_posts() check ?>
			<footer class="full-width">
					<div class="row">
						<div class="large-12 columns">
							<p>Who is Justyn Clark?<!-- &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?> --></p>
						</div>
							<div class="social-footer-wrap">
								<ul class="social-footer">
								<li class="social-footer"><a href="https://www.linkedin.com/in/justinclarkjohnson" title="LinkedIn" class="featured" target="_blank"><i class="fi-social-linkedin"></i></a></li>
								<li class="social-footer"><a href="https://github.com/justyn-clark" title="GitHub" class="featured" target="_blank"><i class="fi-social-github"></i></a></li>
								<li class="social-footer"><a href="https://twitter.com/justynclark" title="Twitter" class="featured" target="_blank"><i class="fi-social-twitter"></i></a></li>
								<li class="social-footer"><a href="https://instagram.com/justyn.clark" title="Instagram" class="featured" target="_blank"><i class="fi-social-instagram"></i></a></li>
								<li class="social-footer" style="padding: 0px"><a href="https://facebook.com/justynclark" title="Facebook" class="featured" target="_blank"><i class="fi-social-facebook"></i></a></li>
								</ul>
							</div>
					</div>
					<script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/app.js'></script>
					<script>
					  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
					  ga('create', 'UA-21695407-1', 'auto');
					  ga('send', 'pageview');
					</script>
			</footer>
		</div>
	</div>
</div>
