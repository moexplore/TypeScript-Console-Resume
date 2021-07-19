let myName: string = "moshe rube"

function displayPosition(nameCompany: string, jobTitle: string, description: string){
    return console.log(`${jobTitle} at ${nameCompany}: I ${description}`)
}

function displaySkill(skillName: string, cool: boolean){
    if (cool===true){
        return console.log(`BAM: ${skillName}`)
    } else {
        return console.log(skillName)
    }
}

console.log("Name: " + myName.toUpperCase())
console.log("Career: Full Stack Engineer")
console.log("Description: I have an affinity for red T-Shirts")
console.log("")
console.log("MY INTERESTS:")
console.log("I have too many to list.")
console.log("")
console.log("PREVIOUS EXPERIENCE")
displayPosition("Apple", "Engineer", "helped design and build the first Iphone.")
displayPosition("Google", "Engineer", "helped design and build the first Android.")
displayPosition("Apple Picker", "Apple Farm Co.", "picked apples from trees to help inspire my work and to experience sunlight")
console.log("")
console.log("MY SKILLS")
displaySkill("Singing", true)
displaySkill("Javascript", true)
displaySkill("Walking", false)
 