//this button starts the evolution process
function generateEvolveButton(x, y, w, h, modeNumber) {

    let buttonText = "Evolve";
    let mode = new Mode();
    mode.countDown = 1;
    mode.onActivate = function () {
        if (creature.bodies.length === 0) {
            warning = new Warning("NO", 50);
            this.deactivate();
            return;
        }

        if (creature.joints.length === 0) {
            warning = new Warning("The whole point this entire thing is for the AI to control the creature \n you are going to need some joints for the creature to be able to move", 500);
            this.deactivate();
            return;
        }
        this.countDown =1;
    };

    mode.drawEffects = function(){
        push();
        textSize(50);
        fill(0);
        noStroke();
        text("LOADING...", canvas.width/2,canvas.height/2);
        pop();

    };

    mode.everyFrame = function(){

        if(this.countDown-- <= 0 ){
            world.reset();
            isCreatureScreaming = creature.isScreaming();

            creature.setAlreadyOverlappingBodies();
            creatureObject = creature.getCreatureAsObject();
            inCreatureCreatorMode = false;
            world.paused = false;
            buttonManager.activateLearningButtons();
            AILearnsToWalkSetup();
            this.deactivate();
            paused = false;


        }





    };




    return new ModeButton(x, y, w, h, buttonText, mode, modeNumber);
}
