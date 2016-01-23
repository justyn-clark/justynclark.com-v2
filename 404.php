<?php get_header(); ?>
<!-- Start the main container -->
<div class="container" role="document">
	<div class="row fullW">
<!-- Row for main content area -->
	<div class="small-12 large-12 columns" id="content" role="main">
		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
			<header>
				<h1 class="entry-title"><?php _e('File Not Found', 'justyn'); ?></h1>
			</header>
			<div class="entry-content">
				<div class="error">
					<p class="bottom"><?php _e('Whoops! Sorry about that. Something had its name changed, or is temporarily unavailable.', 'justyn'); ?></p>
				</div>
				<p><?php _e('Please try the following:', 'justyn'); ?></p>
				<ul>
					<li><?php _e('Check your spelling', 'justyn'); ?></li>
					<li><?php printf(__('Return to the <a href="%s">home page</a>', 'justyn'), home_url()); ?></li>
					<li><?php _e('Click the <a href="javascript:history.back()">Back</a> button', 'justyn'); ?></li>
				</ul>
			</div>
		</article>
	</div>
<?php get_footer(); ?>
