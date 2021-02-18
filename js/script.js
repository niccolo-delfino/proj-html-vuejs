var app = new Vue({
  el: `#app`,
  data: {
    counter: 0,
    nav:['landing', 'pages', 'docs'],
    span:['npm install', 'coming soon', 'coming soon', 'coming soon'],
    loghi: ['amazon', 'google', 'lenovo', 'paypal', 'shopify', 'spotify'],
    quick: ['npm', 'nuget', 'spm', 'github'],
    tools:['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'],
    rates:['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free','Enhanced Security'],
    company:['About us', 'Services', 'Team', 'Pricing', 'Project', 'Careers', 'Blog', 'Login'],
    links: ['Terms of Services', 'Privacy Policy', 'Documentation', 'Changelog', 'Component']

  },
  mounted(){

  },
  methods: {
    rettangolo(indice){
      this.counter = indice;
    }
  }
});
