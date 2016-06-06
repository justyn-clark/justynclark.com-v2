<?php get_header(); ?>
<!-- Start the main container -->
<div class="container" role="document">
	<div class="row fullW">
<!-- Row for main content area -->
	<div class="small-12 large-12 columns" id="content" role="main">
	<?php /* Start loop */ ?>
	<?php while (have_posts()) : the_post(); ?>
		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
			<header>
				<h1 class="entry-title"><?php the_title(); ?></h1>
			</header>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		</article>
	<?php endwhile; // End the loop ?>
	</div>
</div>
<?php get_footer(); ?>
