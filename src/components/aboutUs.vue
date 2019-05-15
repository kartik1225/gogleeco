<template>
	<div>
		<!-- about us -->
	<div id='About_us'>
		<div>
			<v-parallax src="/static/bg_top.png" v-show="false">
				<v-layout
				      align-center
				      column
				      justify-center
				    >
				    	<img src="static/bottom_logo.png" :style="`height:120px`">
				    	<br>
				      	<p dir="rtl" :class="`${$vuetify.breakpoint.width > 600?`display-2`:`headline`} font-weight-thick mb-3`" >
				      		<span
	      		               class="txt-rotate"
	      		               data-period="2000"
	      		               data-rotate='[ "الملتقى السعودي الثاني لصناعة الأعمال والوظائف",
	      		               "يومي 30 ابريل و 1 مايو 2019",
	      		               "ورش عمل","وظائف للجنسين"]'></span>
				      	</p>
				      	<v-btn round class="white black--text" large @click="href(`https://for2030.gogleeco.com`)">دخول</v-btn>
				    </v-layout>
			</v-parallax>
		</div>

		<v-layout row wrap style="margin-top:56px;">
		  <v-flex xs12 sm6>
			  <div >
			  	<v-container>
			  		<v-layout justify-center>
			  			<img src="/static/ICONus.png" style="height: 50px;">
			  		</v-layout>
			  		<h2 class="text-xs-center font-weight-thin or">ABOUT US</h2>
			  		<v-container>
			  			<p class="text-xs-center"><span><img src='/static/logo.png' style="height:16px;"></span> &nbsp {{aboutUsTxt}}</p>
			  		</v-container>
			  	</v-container>
			  </div>
		  </v-flex>

		  <v-flex xs12 sm6>
			  <div>
			  	<v-container>
			  		<v-layout justify-center>
			  			<!-- <v-icon style='font-size: 50px; color: #ef8000;'>supervisor_account</v-icon> -->
			  			<img src="/static/ICONvision.png" style="height: 50px;">
			  		</v-layout>
			  		<h2 class="text-xs-center font-weight-thin or">OUR VISION</h2>
			  		<v-container>
			  			<p class="text-xs-center"><span><img src='/static/logo.png' style="height:16px;"></span> &nbsp{{visionTxt}}</p>
			  			<v-layout justify-center>
			  			<img src='/static/2030_LOGO.png' style="height: 60px;">
			  		</v-layout>
			  		</v-container>
			  	</v-container>
			  </div>
		  </v-flex>
		</v-layout>
	</div>

		<div>
		<div id='Our_values' >
			<v-parallax src="/static/2nd_bg.png" class='our_vals'>
				<v-layout
				      align-center
				      column
				    >
				      <h3 class=" display-1 or" style="padding: 10px;">Our Values</h3>
				      <p class="hr caption" style="max-width:900px;"><span>&nbsp {{coreValues}} &nbsp</span></p>

				      <v-layout wrap>
					      <v-flex xs12 sm6>
					      	<div style=" float: right;" class='bg2el'>
					      		<v-container>
					      		<v-layout column align-center>
						      		<img src='/static/Icon_learning.png' style='height: 60px;'/>
						      		<p class="or" style="padding: 10px; margin:auto;">Learning and Development</p>
						      		<p class="text-xs-center" >{{LearningAndDev}}</p>
						      	</v-layout>
						      	</v-container>
					      	</div>
					      </v-flex>

					      <v-flex xs12 sm6>
					      	<div style="" class='bg2el'>
					      		<v-container>
					      		<v-layout column align-center>
						      		<img src='/static/icon_iniciative.png' style='height: 60px;'/>
						      		<p class="or" style="padding: 10px; margin:auto;">Initiative and Creativity</p>
						      		<p class="text-xs-center" >{{initiativesTxt}}</p>
						      	</v-layout>
						      	</v-container>
					      	</div>
					      </v-flex>

					      <v-flex xs12 sm6>
					      	<div style=" float: right;" class='bg2el'>
					      		<v-container>
					      		<v-layout column align-center>
						      		<img src='/static/Icon_tech.png' style='height: 60px;'/>
						      		<p class="or" style="padding: 10px; margin:auto;">Technology and Innovation</p>
						      		<p class="text-xs-center" >{{techText}}</p>
						      	</v-layout>
						      	</v-container>
					      	</div>
					      </v-flex>

					      <v-flex xs12 sm6>
					      	<div style="" class='bg2el'>
					      		<v-container>
					      		<v-layout column align-center>
						      		<img src='/static/Icon_partner.png' style='height: 60px;'/>
						      		<p class="or" style="padding: 10px; margin:auto;">Partnership</p>
						      		<p class="text-xs-center" >{{partnerTxt}}</p>
						      	</v-layout>
						      	</v-container>
					      	</div>
					      </v-flex>

					  </v-layout>

				    </v-layout>
			</v-parallax>
		</div>

			<div id='Services'>
				<v-layout align-center column>
					<h3 class=" display-1 or" style="padding: 10px;">Our Services</h3>
					<p class="hr2 caption" style="max-width:900px;"><span>&nbsp {{ourServices}} &nbsp</span></p>
				</v-layout>

				<div>
					<v-parallax src="/static/bg3.png" style='background: #f08000;' class='services'>
						<v-layout wrap>
							<v-flex xs6 sm4 v-for='d in ourServicesArray'>
								<div>
									<v-container>
										<v-layout column align-center>
											<img :src='`/static/${d.icon}`' style="height: 70px;" />
											<p class="black--text text-xs-center subheading" style="padding: 10px;">{{d.title}}</p>
										</v-layout>
									</v-container>
								</div>
							</v-flex>
						</v-layout>
					</v-parallax>
				</div>

			</div>

		</div>

		<div id='Contact_us'>
			<v-parallax src="/static/bg4.png" class='bg4 contact_us'>
				<v-layout column style='padding: 10px;'>
					<p class="display-1 or">STAY CONNECTED</p>
					<p class="body-2" style="max-width: 600px;">{{stayConnectedTxt}}</p>

					<v-layout row wrap>
					  <v-flex sm6 xs12>
					  		<div style="margin-top: 50px;">
							    <p class='display-1 or'>RIYADH</p>
							    <p class="body-2">Musa Ibn Nusair Street,<br> Riyadh, Saudi Arabia</p>
							</div>

							<div style='margin-top:50px;'>
								<v-layout>
									<img src='/static/Phone_Icon.png' style="height: 18px;">
									<p style="margin-left: 10px;">+966920009177</p>
								</v-layout>

								<v-layout>
									<img src='/static/Fax_Icon.png' style="height: 18px;">
									<p style="margin-left: 10px;">+966114177177</p>
								</v-layout>

								<v-layout>
									<img src='/static/email_icon.png' style="height: 18px;">
									<p style="margin-left: 10px;">info@gogleeco.com</p>
								</v-layout>

							</div>
					  </v-flex>

					  <v-flex sm6 xs12>
					  	<v-text-field
			  	            label="Solo"
			  	            single-line
			  	            solo
			  	            background-color='white'
			  	            light
			  	            color='black'
			  	            placeholder='Full name'
			  	            style='opacity: 0.7'
			  	            v-model='contact.fullName'
					  	></v-text-field>

					  	<v-text-field
			  	            label="Solo"
			  	            single-line
			  	            solo
			  	            background-color='white'
			  	            light
			  	            color='black'
			  	            type='number'
			  	            placeholder='Telephone number'
			  	            style='opacity: 0.7'
			  	            v-model='contact.phone'
					  	></v-text-field>

					  	<v-text-field
			  	            label="Solo"
			  	            single-line
			  	            solo
			  	            background-color='white'
			  	            light
			  	            color='black'
			  	            placeholder='E-mail'
			  	            :rules="[rules.required, rules.email]"
			  	            style='opacity: 0.7'
			  	            v-model='contact.email'
					  	></v-text-field>



					  	<v-text-field
			  	            label="Solo"
			  	            single-line
			  	            solo
			  	            background-color='white'
			  	            light
			  	            color='black'
			  	            placeholder='Subject'
			  	            style='opacity: 0.7'
			  	            v-model='contact.subject'
					  	></v-text-field>

					  	<v-card class='white' style='opacity: 0.7'>
					  	 <div style='padding-left: 10px;'>

					  	<v-textarea
					  	          name="input-7-1"
					  	          placeholder='How can we help you?'
					  	          color='black'
					  	          v-model='contact.disc'
					  	></v-textarea>
					  	 </div>
					  	</v-card>


					  		<v-btn class='black--text'style='background: #ef8000; margin-left: 0; margin-top: 10px;' @click='send'>send</v-btn>

					  </v-flex>

					</v-layout>
				</v-layout>
			</v-parallax>
		</div>

		<v-card>
			<v-layout justify-center column align-center>
				<h3 class=" display-1 or" style="padding: 10px;">Locate Us</h3>
				<p class="hr3 caption" style="max-width:900px;"><span>&nbsp Musa Ibn Nusair Street, Riyadh, Saudi Arabia &nbsp</span></p>
			</v-layout>

		</v-card>

		<GmapMap
		  :center="center"
		  :zoom="15"
		  style="width: 100%; height: 300px"
		>
		  <GmapMarker

		    :position="center"
		    :clickable="true"
		    :draggable="true"
		    @click="center=m.position"
		  />
		</GmapMap>

		<!-- <img src='/static/map.png' style="width: 100%;"> -->

		<!-- will be removed -->
		<v-dialog v-model="popUp" max-width="800px" style="border-radius:15px;"> 
				<div elevation-0 style="position:relative; border-radius:15px;">
					<div style="position:absolute; bottom: 0px;">
							<v-btn class="white" @click="popUp = !popUp" round  v-show="$vuetify.breakpoint.width > 600">
							إغلاق
							</v-btn>

							<v-btn class="white" small icon @click="popUp = !popUp" round v-show="$vuetify.breakpoint.width < 600">
							<v-icon>clear</v-icon>
							</v-btn>
					</div>
					<img src="/static/gogleeco_pop.jpg" style="width:100%; height:auto; border-radius: 15px; display: block;"/>
				</div>
		</v-dialog>
	</div>


</template>

<script>
import axios from 'axios'
import textAni from './textAni.js'
	export default{
		data(){
			return{
				popUp:true,
				aboutUsTxt:` started to organize exhibitions and conferences in 2002 with expertise in Organization, management and implementation of exhibitions and conferences the comapny Contribute to the national transformation program by introducing initiatives for exhibitions Conferences and forums that benefit and benefit young people and society.`,
				visionTxt:`To be a leading Saudi international company Organizing conferences and exhibitions and creating national youth initiatives Which contributes to the Vision of 2030`,
				coreValues:`Our core values ​​remain the cornerstone of our company, which we rely on in our business ethics system`,
				LearningAndDev:`We commit to continuous development and build experience for our employees and partners`,
				initiativesTxt:`Create the best creative ideas and encourage Introducing national initiatives`,
				techText:`Use the latest technology and innovation Applications that contribute to Raise work efficiency`,
				partnerTxt:`We cooperate with local and international organizations And related institutions to develop Exhibitions and conferences`,
				ourServices:`We are specialized in providing the following services with high efficiency`,
				stayConnectedTxt:`We are happy to get connected with you all the time to answer all your questions and provide you with everything you need to create a successful event`,
				ourServicesArray:[
					{icon:`Icon_tech_design.png`,title:'Technical design'},
					{icon:`Icon_media_production.png`,title:'Media Production'},
					{icon:`Icon_media_campaigns.png`,title:'Media campaigns'},
					{icon:`icon_telecommunication.png`,title:'Telecommunications'},
					{icon:`Icon_support_services.png`,title:'Support Services'},
					{icon:`icon_spcial_events_management.png`,title:'Special events Management'}
				],

		        center: {lat:24.704341, lng:46.683830},
		        markers: [{lat:24.704341, lng:46.683830}],
		        places: [],
		        currentPlace: null,
		        contact:{
		        	fullName:'',
		        	phone:'',
		        	email:'',
		        	subject:'',
		        	disc:''
		        },
		        rules: {
                  required: value => !!value || 'Required.',
                  counter: value => value.length <= 20 || 'Max 20 characters',
                  email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
		        }
		    	}
			}
		},
		methods:{
			send(){
				let data = {
					fullName:this.contact.fullName,
		        	phone:this.contact.phone,
		        	email:this.contact.email,
		        	subject:this.contact.subject,
		        	disc:this.contact.disc
				}

				const body = `${data.fullName}\n${data.disc}\n${data.phone}\n${data.email}`;

				// console.log(data);

				const email = 'info@gogleeco.com';

				const e = (uri)=>{
					return encodeURI(uri)
				}

				window.location = `mailto:${email}?subject=${e(data.subject)}&body=${e(body)}`;

			},
			href(link){
				var win = window.open(link, '_blank');
				win.focus();
			}
		},
		created(){

		}
	}
</script>



<style>

.v-messages__message{
	font-size: 18px;
	color: white;
	opacity: 1 !important;
}
.v-input input , .v-textarea textarea {
	color: black;
}

.bgTitle{
	font-size: 62px!important;
}

.gr{
	margin: auto;
    width: 430px;
    position: absolute;
}

.bg2el{
	max-width: 300px;
}

.hr { width:100%; text-align:center; border-bottom: 1px solid #ef8000; line-height:0.1em; margin:10px 0 20px; }

.hr span { background:#000; padding:0 0.5px; }

.hr2 { width:100%; text-align:center; border-bottom: 1px solid #ef8000; line-height:0.1em; margin:10px 0 20px; }

.hr2 span { background:#fff; padding:0 0.5px; }

.Title{
	font-family: 'Passion One', cursive !important;
}


.or{
	color: #ef8000;
}

.defuse{
	background-color: white;
	opacity: 0.7;
}

.hr3 { width:100%; text-align:center; border-bottom: 1px solid #ef8000; line-height:0.1em; margin:10px 0 20px; }

.hr3 span { background:#fff; padding:0 0.5px; }

.our_vals{
	height: 500px !important;
	background:black;
}

.services{
	height: 300px !important;
}

.contact_us{
	height: 615px !important;
	background-color:black;
}

@media screen and (max-width:600px){
	.bgTitle{
		font-size: 30px !important;
	}

	.our_vals{
		height:860px !important;
	}

	.services{
		height: 500px !important;
	}

	.contact_us{
		height: 100% !important;
	}

	.gr{
		width: 250px;
	}

	.bg2el{
		max-width: 100%;
	}

	.hr{
		line-height: normal;
		border-bottom: 1px solid #000;
	}

	.hr2{
		line-height: normal;
		border-bottom: 1px solid #fff;
	}
}

</style>
