
new Vue({
  el: '#app',
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2021年03月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'イチロー', course: '野球実践コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '北野武', course: 'お笑いエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '松山英樹', course: 'Webマスターズコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function() {
        this.defaultLastId++
        this.students.push({
          id: this.defaultLastId,
          name: this.name,
          course: this.course,
          acceptancePeriod: this.acceptancePeriod
        })
        this.name = ''
        this.course = ''
        this.acceptancePeriod = ''
    }
  }
})