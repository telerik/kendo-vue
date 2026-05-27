/* eslint-disable max-len */

export const unknownRequest =
    "The request cannot be processed at this time. Please excuse us for the inconvenience.";

const streamingExample = "Generate a long story";
const quantumExample = "Explain quantum computing";

export const suggestionsList = [streamingExample, quantumExample];

export const suggestionsResponse = [
    {
        suggestion: streamingExample,
        response: `Once upon a time, in a small village nestled between rolling hills and a sparkling river, there lived a young inventor named Maya. She had always been fascinated by the way things worked, spending countless hours in her workshop tinkering with gears, springs, and mysterious contraptions.

One autumn morning, Maya discovered an old, leather-bound journal in her grandmother's attic. The pages were filled with sketches and notes about a legendary device called the "Time Weaver" - a machine that could supposedly capture and replay moments from the past.

Intrigued by the possibility, Maya began working tirelessly to build the device. Days turned into weeks as she gathered rare materials: crystalline conductors from the nearby caves, clockwork mechanisms from the village's oldest timepieces, and a peculiar blue stone that hummed with an otherworldly energy.

After months of experimentation, Maya finally completed the Time Weaver. When she activated it for the first time, the workshop filled with a soft, golden light, and suddenly she could see ghostly images of her grandmother as a young woman, working in the very same space decades ago.

The invention would change Maya's life forever, opening up possibilities she had never imagined and connecting her to a legacy of innovation that had been passed down through generations.`,
    },
    {
        suggestion: quantumExample,
        response: `Quantum computing represents a revolutionary approach to information processing that harnesses the strange and counterintuitive principles of quantum mechanics to solve complex problems.

**Classical vs Quantum Bits**: Traditional computers use bits that exist in definite states of 0 or 1. Quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously through a property called superposition.

**Key Quantum Principles**:

*Superposition*: Qubits can be in a combination of both 0 and 1 states until measured, allowing quantum computers to process many possibilities at once.

*Entanglement*: Qubits can be mysteriously connected, where measuring one instantly affects another, regardless of distance.

*Quantum Interference*: Quantum algorithms manipulate probability amplitudes to increase the chances of measuring correct answers while decreasing wrong ones.

**Applications**: Quantum computing shows promise in cryptography, drug discovery, financial modeling, artificial intelligence, and optimization problems that are intractable for classical computers.

**Current Challenges**: Quantum systems are extremely fragile and require near absolute-zero temperatures. Quantum decoherence causes qubits to lose their quantum properties quickly, limiting computation time.

While still in early stages, quantum computing represents a fundamental shift in how we approach computational problems.`,
    },
];
