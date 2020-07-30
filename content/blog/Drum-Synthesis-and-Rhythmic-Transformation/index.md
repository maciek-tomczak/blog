---
title: Drum Synthesis and Rhythmic Transformation with Adversarial Autoencoders
date: "2020-07-01T22:20:00.284Z"
tags: [redrumming, ML]
description: "Audio examples accompanying paper for ACM International Conference on Multimedia 2020."
---

### 1. Audio synthesis with trained generator (G)

We demonstrate reconstruction of bar-length drum patterns from the trained generator model.

Examples at 22.05kHz sample rate are recreated with Griffin-Lim algorithm together with their corresponding output from the proposed AAE-GM model. More detailed information about data used here can be viewed in Section 3.1 of the paper.

<figure>
<figcaption><b>Source</b></figcaption>
	<audio controls
		src="./ACM20_audio/0092/source_GL-0092_392.wav">
	</audio>
	<figcaption><b>Output Reconstruction</b></figcaption>
	<audio controls
		src="./ACM20_audio/0092/0092_392.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Source</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026/source_GL-0026_64.wav">
	</audio>
	<figcaption><b>Output Reconstruction</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026/0026_64.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Source</b></figcaption>
	<audio controls
		src="./ACM20_audio/0070/source_GL-0070_862.wav">
	</audio>
	<figcaption><b>Output Reconstruction</b></figcaption>
	<audio controls
		src="./ACM20_audio/0070/0070_862.wav">
	</audio>
</figure>

### 2. Latent Space Interpolation

The proposed model performs rhythmic transformation of bar-length drum patterns as follows:

- Generator reconstruction of **source input**
- Transformation into an **intermediate rhythmic pattern**
- Resulting **output transformation**

A user is given the freedom to manipulate the structure within a bar without reliance on discrete identification of rhythmic boundaries towards a continuous transformation.

- Interpolations in the latent space allow for the mixing of two different drum patterns
- A gradual change is achievable from the **source** rhythmic pattern to the **target** pattern
- The **intermediate latent codes** are produced using a linear interpolation between **source** and **target** latent codes

<figure>
<figcaption><b>Source Recording</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026_to_0012/source_GL-0026_64.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Stage 1 | α = 0.0</b></figcaption>
<figcaption><b>Source reconstructed with generator G (not interpolated)</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026_to_0012/interp0_alpha0.0.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Stage 2 | α = 0.25</b></figcaption>
<figcaption><b>This example is similar to source, but begins to be transformed closer to target</b></figcaption>
	<audio controls
	src="./ACM20_audio/0026_to_0012/interp1_alpha0.25.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Stage 3 | α = 0.5</b></figcaption>
<figcaption><b>This example is just in-between the source and the target pattern</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026_to_0012/interp2_alpha0.5.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Stage 4 | α = 0.75</b></figcaption>
<figcaption><b>This example begins to be more rhythmically similar to the target pattern</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026_to_0012/interp3_alpha0.75.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Stage 5 | α = 1.0</b></figcaption>
<figcaption><b>Target reconstructed with generator G (not interpolated)</b></figcaption>
		<audio controls
			src="./ACM20_audio/0026_to_0012/interp4_alpha1.0.wav">
		</audio>
</figure>

<figure>
<figcaption><b>Target Recording</b></figcaption>
	<audio controls
		src="./ACM20_audio/0026_to_0012/target_GL-0012_1611.wav">
	</audio>
</figure>
