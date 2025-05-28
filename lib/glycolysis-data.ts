export const glycolysisSteps = [
  {
    id: 1,
    name: "Glucose Phosphorylation",
    enzyme: "Hexokinase",
    substrate: "Glucose",
    product: "Glucose-6-phosphate",
    coenzymes: "ATP → ADP + Pi",
    energyChange: "ATP consumed (-1)",
    explanation:
      "Hexokinase transfers a phosphate group from ATP to glucose, creating glucose-6-phosphate. This traps glucose inside the cell and prepares it for the next step of glycolysis.",
    additionalDetails:
      "Hexokinase has a high affinity for glucose and is inhibited by its product, glucose-6-phosphate, providing a feedback mechanism to control glycolysis.",
    regulation:
      "Hexokinase is inhibited by glucose-6-phosphate, which prevents excessive phosphorylation when G6P accumulates.",
    clinicalRelevance:
      "Mutations in hexokinase can lead to hemolytic anemia due to impaired red blood cell metabolism.",
  },
  {
    id: 2,
    name: "Isomerization",
    enzyme: "Phosphoglucose isomerase",
    substrate: "Glucose-6-phosphate",
    product: "Fructose-6-phosphate",
    coenzymes: "None",
    energyChange: "None",
    explanation:
      "Phosphoglucose isomerase converts glucose-6-phosphate to fructose-6-phosphate by rearranging the sugar's structure. This isomerization prepares the molecule for the next phosphorylation step.",
    additionalDetails:
      "This reaction is reversible and reaches equilibrium quickly. The enzyme catalyzes the conversion between an aldose (G6P) and a ketose (F6P).",
    regulation: "This step is not a major regulatory point in glycolysis.",
    clinicalRelevance: "Phosphoglucose isomerase deficiency can cause hemolytic anemia and neuromuscular symptoms.",
  },
  {
    id: 3,
    name: "Fructose Phosphorylation",
    enzyme: "Phosphofructokinase-1 (PFK-1)",
    substrate: "Fructose-6-phosphate",
    product: "Fructose-1,6-bisphosphate",
    coenzymes: "ATP → ADP + Pi",
    energyChange: "ATP consumed (-1)",
    explanation:
      "Phosphofructokinase-1 adds a second phosphate group to fructose-6-phosphate, creating fructose-1,6-bisphosphate. This is the committed step of glycolysis and is highly regulated.",
    additionalDetails: "This is the rate-limiting step of glycolysis and is irreversible under cellular conditions.",
    regulation:
      "PFK-1 is inhibited by ATP and citrate (indicating energy abundance) and activated by AMP and fructose-2,6-bisphosphate (indicating energy need).",
    clinicalRelevance:
      "PFK deficiency leads to glycogen storage disease type VII (Tarui disease), causing muscle weakness and exercise intolerance.",
  },
  {
    id: 4,
    name: "Cleavage",
    enzyme: "Aldolase",
    substrate: "Fructose-1,6-bisphosphate",
    product: "Dihydroxyacetone phosphate (DHAP) and Glyceraldehyde-3-phosphate (G3P)",
    coenzymes: "None",
    energyChange: "None",
    explanation:
      "Aldolase splits fructose-1,6-bisphosphate into two three-carbon molecules: dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (G3P). This converts a six-carbon sugar into two three-carbon sugars.",
    additionalDetails: "This reaction is reversible and is also used in gluconeogenesis (the synthesis of glucose).",
    regulation: "This step is not a major regulatory point in glycolysis.",
    clinicalRelevance: "Aldolase deficiency is rare but can cause hemolytic anemia and myopathy.",
  },
  {
    id: 5,
    name: "Isomerization of DHAP",
    enzyme: "Triose phosphate isomerase",
    substrate: "Dihydroxyacetone phosphate (DHAP)",
    product: "Glyceraldehyde-3-phosphate (G3P)",
    coenzymes: "None",
    energyChange: "None",
    explanation:
      "Triose phosphate isomerase converts DHAP to G3P, allowing both three-carbon products from the previous step to continue through glycolysis. This effectively doubles the yield of the pathway.",
    additionalDetails:
      "This enzyme is extremely efficient, approaching the theoretical limit of catalytic efficiency. The reaction is rapidly reversible.",
    regulation: "This step is not a major regulatory point in glycolysis.",
    clinicalRelevance:
      "Triose phosphate isomerase deficiency is a rare genetic disorder causing hemolytic anemia and neurological defects.",
  },
  {
    id: 6,
    name: "Oxidation and Phosphorylation",
    enzyme: "Glyceraldehyde-3-phosphate dehydrogenase",
    substrate: "Glyceraldehyde-3-phosphate (G3P)",
    product: "1,3-Bisphosphoglycerate (1,3-BPG)",
    coenzymes: "NAD+ → NADH + H+, Pi",
    energyChange: "NADH produced (+2 for two G3P molecules)",
    explanation:
      "Glyceraldehyde-3-phosphate dehydrogenase oxidizes G3P and adds an inorganic phosphate, producing 1,3-bisphosphoglycerate. This is the first energy-yielding step, producing NADH.",
    additionalDetails:
      "This reaction couples the oxidation of an aldehyde to the formation of a high-energy acyl phosphate bond, conserving the energy for ATP synthesis in the next step.",
    regulation: "The enzyme is inhibited by high levels of NADH, which signals energy abundance.",
    clinicalRelevance:
      "This enzyme is a target for some anti-cancer drugs and is involved in neurodegenerative diseases.",
  },
  {
    id: 7,
    name: "First ATP Generation",
    enzyme: "Phosphoglycerate kinase",
    substrate: "1,3-Bisphosphoglycerate (1,3-BPG)",
    product: "3-Phosphoglycerate (3PG)",
    coenzymes: "ADP → ATP",
    energyChange: "ATP produced (+2 for two 1,3-BPG molecules)",
    explanation:
      "Phosphoglycerate kinase transfers a phosphate group from 1,3-BPG to ADP, generating ATP and 3-phosphoglycerate. This is the first ATP-producing step of glycolysis.",
    additionalDetails:
      "This reaction is an example of substrate-level phosphorylation, where ATP is generated without the electron transport chain.",
    regulation: "This step is not a major regulatory point in glycolysis.",
    clinicalRelevance:
      "Phosphoglycerate kinase deficiency can cause hemolytic anemia, neurological disorders, and myopathy.",
  },
  {
    id: 8,
    name: "Isomerization",
    enzyme: "Phosphoglycerate mutase",
    substrate: "3-Phosphoglycerate (3PG)",
    product: "2-Phosphoglycerate (2PG)",
    coenzymes: "None",
    energyChange: "None",
    explanation:
      "Phosphoglycerate mutase relocates the phosphate group from the 3rd carbon to the 2nd carbon of phosphoglycerate. This prepares the molecule for the next step by creating a high-energy phosphate bond.",
    additionalDetails:
      "This reaction requires a small amount of 2,3-bisphosphoglycerate (2,3-BPG) as a cofactor to initiate the reaction.",
    regulation: "This step is not a major regulatory point in glycolysis.",
    clinicalRelevance:
      "Phosphoglycerate mutase deficiency can cause glycogen storage disease type X, resulting in muscle cramps and exercise intolerance.",
  },
  {
    id: 9,
    name: "Dehydration",
    enzyme: "Enolase",
    substrate: "2-Phosphoglycerate (2PG)",
    product: "Phosphoenolpyruvate (PEP)",
    coenzymes: "None",
    energyChange: "None",
    explanation:
      "Enolase removes a water molecule from 2-phosphoglycerate to form phosphoenolpyruvate (PEP). This creates a high-energy phosphate bond that will be used to generate ATP in the next step.",
    additionalDetails:
      "The removal of water creates an unstable enol group, making the phosphate bond high-energy and primed for transfer.",
    regulation:
      "Enolase is inhibited by fluoride ions, which is why fluoride is sometimes added to blood collection tubes to prevent glycolysis.",
    clinicalRelevance: "Enolase can serve as a marker for certain cancers and autoimmune diseases.",
  },
  {
    id: 10,
    name: "Second ATP Generation",
    enzyme: "Pyruvate kinase",
    substrate: "Phosphoenolpyruvate (PEP)",
    product: "Pyruvate",
    coenzymes: "ADP → ATP",
    energyChange: "ATP produced (+2 for two PEP molecules)",
    explanation:
      "Pyruvate kinase transfers the phosphate group from phosphoenolpyruvate to ADP, generating ATP and pyruvate. This is the final step of glycolysis, producing the second round of ATP.",
    additionalDetails:
      "This reaction is irreversible and is another example of substrate-level phosphorylation. The reaction releases a significant amount of energy.",
    regulation:
      "Pyruvate kinase is activated by fructose-1,6-bisphosphate (feed-forward activation) and inhibited by ATP, alanine, and acetyl-CoA (feedback inhibition).",
    clinicalRelevance:
      "Pyruvate kinase deficiency is the most common enzyme defect in the glycolytic pathway, causing hemolytic anemia.",
  },
]
