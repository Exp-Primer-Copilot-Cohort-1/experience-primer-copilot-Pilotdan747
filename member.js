function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'css', 'html'],
        getSkills: function () {
            return this.skills;
        }
    }
    return member;
}