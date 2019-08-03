Vue.component('v-select', VueSelect.VueSelect)

const tweets = [
    {
        id: 1,
        name: 'James',
        handle: '@jokerjames',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        tweet: "If you don't succeed, dust yourself off and try again.",
        likes: 10,
    },
    {
        id: 2,
        name: 'Fatima',
        handle: '@fantasticfatima',
        img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        tweet: 'Better late than never but never late is better.',
        likes: 12,
    },
    {
        id: 3,
        name: 'Xin',
        handle: '@xeroxin',
        img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        tweet: 'Beauty in the struggle, ugliness in the success.',
        likes: 18,
    }
]

const joblists = [
    {
        id: 1,
        title: "Therapeut",
        qualification: "Assistenzarzt",
        specialization: "Innere Medizin",
        workingTernure: "Festanstellung",
        workingTime: "Vollzeit",
        institutionType: "Krankenhaus",
        institutionCity: "Saarland",
        institutionCountry: "Germany",
        dateCreated: "29.06.2009"
    },
    {
        id: 2,
        title: "Arzt",
        qualification: "Chefarzt",
        specialization: "Innere Medizin",
        workingTernure: "Festanstellung",
        workingTime: "Vollzeit",
        institutionType: "Krankenhaus",
        institutionCity: "Saarland",
        institutionCountry: "Germany",
        dateCreated: "29.06.2010"
    }

]

const jobs = [
    {
        id: 1,
        name: "Arzt",
        value: "A"
    },
    {
        id: 2,
        name: "Pflegekraft",
        value: "P"
    },
    {
        id: 3,
        name: "Therapeut",
        value: "T"
    }
]

Vue.component('tweet-component', {
    template: `  
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
<!--              <img :src="tweet.img" alt="Image">-->
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small>
                <br>
                {{tweet.tweet}}
              </p>
            </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                  <span class="likes">{{tweet.likes}}</span>
                </a>
              </div>
          </div>
        </article>
      </div>
    </div>  
  `,
    props: {
        tweet: Object
    }
});
Vue.component('joblists-component', {
    template: `  
  <div class="cell cell-md-12 text-left section-bottom-50" style="border: 1px solid rgba(227,227,227,0.62); padding: 20px; background-color: #fcfcfc">
                                <h5 class="text-left head-xs" style="font-size: 18px; color: #2e6177">{{joblist.title}} - {{joblist.qualification}} (m/w/d) {{joblist.specialization}}</h5>
                                <p class="cmln_p par-xs pull-top-10" style="font-size: 14px;">{{joblist.workingTernure}}, {{joblist.workingTime}}, {{joblist.institutionType}}, {{joblist.institutionCity}}, {{joblist.institutionCountry}}</p>
                                <div class="pull-top-10" style="float: right">
                                    <div class="reveal-xs-inline-block pull-left-xs-20">
                                        <i class="fa fa-calendar"></i>
                                    </div>
                                    <div class="reveal-xs-inline-block pull-top-xs-35">
                                        <div class="offset-top-10 offset-xs-top-0 inset-xs-left-15">
                                            <p class="par-xs" style="font-size: 12px">{{joblist.dateCreated}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  `,
    props: {
        joblist: Object
    }
});

const app = new Vue ( {
    el: '#app',
    data: {
        selected:'',
        isSelected: true,
        jobs,
        joblists,
        tweets

    },
        computed: {
            filteredList() {
                return this.postList.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }



    )