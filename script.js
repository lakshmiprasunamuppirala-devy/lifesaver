function analyzeEmergency() {

    const emergencyType =
        document.getElementById("emergencyType").value;

    const location =
        document.getElementById("location").value.trim();

    const people =
        document.getElementById("people").value;

    const route =
        document.getElementById("route").value.trim();

    const obstacles =
        document.getElementById("obstacles").value;

    const additional =
        document.getElementById("additional").value.trim();

    const status =
        document.getElementById("status");

    const result =
        document.getElementById("result");

    const missingInfo =
        document.getElementById("missingInfo");

    const actionPlan =
        document.getElementById("actionPlan");


    // Basic emergency type check

    if (emergencyType === "") {

        alert("Please select the emergency type.");
        return;

    }


    // Change status

    status.innerHTML = "🔄 AI analyzing emergency information...";

    setTimeout(() => {

        status.innerHTML = "✅ Emergency analyzed successfully.";


        // Emergency Summary

        result.innerHTML = `
            <div class="summary">

                <h3>📋 Emergency Summary</h3>

                <p><strong>Emergency:</strong>
                ${emergencyType}</p>

                <p><strong>Location:</strong>
                ${location || "Not provided"}</p>

                <p><strong>People needing help:</strong>
                ${people || "Unknown"}</p>

                <p><strong>Access Route:</strong>
                ${route || "Unknown"}</p>

                <p><strong>Obstacles:</strong>
                ${obstacles || "Unknown"}</p>

                <p><strong>Additional Information:</strong>
                ${additional || "None provided"}</p>

            </div>
        `;


        // Missing Information Detection

        let missing = [];

        if (!location) {
            missing.push("📍 Exact emergency location");
        }

        if (!people) {
            missing.push("👥 Number of people requiring help");
        }

        if (!route) {
            missing.push("🛣️ Best access route");
        }

        if (!obstacles) {
            missing.push("🚧 Crowd or obstacle conditions");
        }

        if (!additional) {
            missing.push("ℹ️ Additional critical information");
        }


        if (missing.length === 0) {

            missingInfo.innerHTML = `
                <div class="complete">
                    ✅ No critical information appears to be missing.
                    Responders can proceed with the available information.
                </div>
            `;

        } else {

            missingInfo.innerHTML = `
                <p>
                    ⚠️ AI detected ${missing.length}
                    missing information item(s):
                </p>

                ${missing.map(item =>
                    `<div class="missing-item">${item}</div>`
                ).join("")}

                <p>
                    🤖 LifeLine AI would ask nearby people
                    specifically for this missing information.
                </p>
            `;
        }


        // Responder Action Plan

        let actions = [];

        actions.push(
            `🚨 Dispatch appropriate emergency support for ${emergencyType}.`
        );

        if (location) {
            actions.push(
                `📍 Direct responders to ${location}.`
            );
        }

        if (route) {
            actions.push(
                `🛣️ Use the reported access route: ${route}.`
            );
        }

        if (obstacles === "Heavy crowd") {
            actions.push(
                `👮 Request crowd-control support before entry.`
            );
        }

        if (obstacles === "Road blocked") {
            actions.push(
                `🚧 Identify an alternate access route.`
            );
        }

        if (obstacles === "Debris present") {
            actions.push(
                `⚠️ Approach carefully and assess the blocked area.`
            );
        }

        if (people) {
            actions.push(
                `👥 Prepare assistance for approximately ${people} person(s).`
            );
        }

        actions.push(
            `🔍 Verify any missing critical information before final response deployment.`
        );


        actionPlan.innerHTML = actions.map(action =>
            `<div class="action">${action}</div>`
        ).join("");


    }, 1000);
}