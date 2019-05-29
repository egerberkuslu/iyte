<template>
   
   <section id="content">

			<div class="content-wrap">

				<div class="container clearfix">

					<div id="posts" class="events small-thumbs">

						<div v-for="event in events" :key="event.id" class="entry clearfix">
							<div class="entry-image">
								<a href="#">
									<img src="/img/iyte-slider.jpg" alt="Event">
									<div class="entry-date"><span>{{event.date | myDate2}}</span></div>
								</a>
							</div>
							<div class="entry-c">
								<div class="entry-title">
									<h2><a href="#">{{event.name}}</a></h2>
								</div>
								<ul class="entry-meta clearfix">
									<li><span class="label label-warning">{{event.category}}</span></li>
									<li><a href="#"><i class="icon-time"></i> {{event.timestarts}}  - {{event.timeends}}</a></li>
									<li><a href="#"><i class="icon-map-marker2"></i> {{event.place}}</a></li>
								</ul>
								<div class="entry-content">
									<p>{{event.subject}}</p>
									<a v-if="!event.passed" href="#" class="btn btn-danger">ETKİNLİK GEÇTİ</a>
									<a v-if="event.passed" href="#" class="btn btn-success">Daha fazlası için</a>
								</div>
							</div>
						</div>

					
					</div>

					

				</div>

			</div>

		</section>
		
		
</template>

<style>
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
</style>

<script>
    export default {
        data() {
            return {
                editmode: false,
				events: [],				
            }
        },
        methods: {
            loadEvents(){
				 axios.get("api/events").then(({ data }) => (this.events = data.data))
				 var vm = this;
				 console.log(this.events);
				for (var i = 0; i < vm.events.length; i++) { 
						console.log(vm.events[i])
						if ((moment.duration(moment( vm.events[i].date , "YYYY-MM-DD").diff(moment(new Date()))).asDays()) < 0) {
							vm.events[i].passed = false;
        				}
				}
			},
        },
        created() {
           this.loadEvents();

           // setInterval(() => this.loadKapak(), 3000);
        }
    }
</script>