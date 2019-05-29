<template>
   <section id="content-etkinlik">

			<div id="calismalarimiz" class="section mt-3  nobottommargin clearfix" style="background-color: white;">
					<div class="container clearfix"> 
						<div class="heading-block center noborder" data-heading="O">
							<h3 class="nott ls0">Etkinliklerimizden Kareler</h3>
						</div>

						<!-- Portfolio Filter
						============================================= -->
						<ul class="portfolio-filter style-2 center clearfix" data-container="#portfolio">

							<li class="activeFilter"><a href="#" data-filter="*">Tüm Fotoğraflar</a></li>
							<li><a href="#" data-filter=".CreaTech">CreaTech</a></li>
							<li><a href="#" data-filter=".summit">Summit</a></li>
							<li><a href="#" data-filter=".ebt">EBT</a></li>
							
					
						</ul><!-- #portfolio-filter end -->
					</div>

						<!-- Portfolio Items
					============================================= -->
					<div id="portfolio" data-big="2" data-lightbox="gallery" class="portfolio grid-container portfolio-nomargin clearfix">

						<article class="portfolio-item summit">
							<div class="portfolio-image">
								<a href="/images/about/1.jpg" data-lightbox="gallery-item" class="pf-icons pf-media"><img class="image_fade" src="/images/about/1.jpg" alt="Gallery Thumb 1"></a>
							</div>
						</article>

						<article class="portfolio-item  ebt">
							<div class="portfolio-image">
								<a href="/images/about/2.jpg" data-lightbox="gallery-item" class="pf-icons pf-media"><img class="image_fade" src="/images/about/2.jpg" alt="Gallery Thumb 1"></a>
							</div>
						</article>

						<article class="portfolio-item summit">
							<div class="portfolio-image">
								<a href="/images/about/3.jpg" data-lightbox="gallery-item" class="pf-icons pf-media"><img class="image_fade" src="/images/about/3.jpg" alt="Gallery Thumb 1"></a>
								<div class="portfolio-overlay">
									<div class="portfolio-desc">
										<h3><a href="#">Summit</a></h3>
										<span><a href="#">summit</a>, <a href="#">summit</a></span>
									</div>
								</div>
							</div>
						</article>

						<article class="portfolio-item ebt CreaTech">
							<div class="portfolio-image">
								<a href="/images/about/4.jpg" data-lightbox="gallery-item" class="pf-icons pf-media"><img class="image_fade" src="/images/about/4.jpg" alt="Gallery Thumb 1"></a>
								<div class="portfolio-overlay">
									<div class="portfolio-desc">
										<h3><a href="#">Summit</a></h3>
										<span><a href="#">summit</a>, <a href="#">summit</a></span>
									</div>
								</div>
							</div>
						</article>
						
					</div><!-- #portfolio end -->
				</div>

		</section>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>