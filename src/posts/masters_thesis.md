---
title: "Master's Thesis"
date: "2024-07-24"
description: "A nodal file browser for organising creative projects."
categories: ["thesis"]
tags: ["no-banner"]
customStyle: "thesis-styles"
---

# Table of Contents

# 1 - Introduction

Every creative work is an arrangement of its constituent elements. A work may consist of just a few, or hundreds, or hundreds of thousands, of individual elements. The process of creating a work involves a myriad of design decisions about how its elements relate to one another, and what they reference externally, such as other works and the real world. Characters, colours, symbols, concepts, motifs, plot points, compositions, and so on, can all be referred to as elements. They can be anything, and they're what a work is made out of.

The final work is an arrangement of its elements in some cohesive layout. They are placed in overlapping and nested patterns, which the creative individual or team (both from now referred to as "the creative") manipulates these patterns to create whatever it is they wish to create. The specific structure of a work determines the experience of it, and the intention and ultimate goal is to provide the audience of a work with a particular kind of experience. 

The more complex the project, the more difficult it is to effectively to view and modify the desired patterns. This complexity is further increased by references to external things, since no project exists in a vacuum, outside of its context in culture. Minds have limits, so tools and processes are needed. 

There are scripts, design documents, timelines, mind-maps, storyboards, and much more. These are all tools or methods for visualising the relationships of particular sets of elements. For example, scripts deal with action and dialogue, timelines with events and causality, and storyboards with composition, roughly speaking. There are probably as many as there are creatives, though some types are more common. 

The creative needs the ability to select any arbitrary set of elements within their work and the context it sits in, and visualise the relationships between them in order to effectively evaluate them and make adjustments. Their ability to do this is a matter of organisation, of the potentially vast amount of digital material at their disposal. This thesis begins with that observation, explores the use of dynamic node graphs for that purpose, and presents the concept and prototype for a software tool designed around them. More specifically, the final presented concept is an interconnected node network of a creative's entire body of digital material, and ways to make it intuitive and useful. 

The first chapter is this introduction. The second chapter covers the theoretical body of the thesis, outlining the motivating problems in creative work and exploring concepts of complexity, consistency, and cohesion. It also delves into the importance of overviews and pattern selection in creative processes. The third chapter examines node graphs as maps of patterns, exploring conceptual space and the evolution from static to dynamic graphs. This thesis is not an in-depth or exhaustive exploration of any of these topics individually. The emphasis is on how they fit together to form the theoretical basis and motivation for building the software prototype. 

The fourth chapter introduces the software prototype, Karta, detailing its design goals, main features, and technical implementation. The thesis concludes with a fifth chapter summarizing key insights and and a sixth, listing limitations of both the thesis and Karta, and potential future directions. 

To ground the ideas presented, qualitative interviews with two creative directors in the game industry have been conducted. They were asked about their processes and pipelines and about how they manage the complexities of creative work. Relevant segments from those interviews will be referenced throughout the thesis. 

With the above said, the formal research questions can be formulated thusly:

"How may a node network of a file system aid in managing the complexity of creative projects, and of a creative's total body of work?"

The overarching aim of this thesis is a means to an end: to more effectively craft experiences. It explores in theory, with a pathway to practice, how far node graph networks can be pushed for structuring creative work. As Barbara Tversky writes in her book _Mind in Motion_: "In language, subjects can be represented by points with lines linking them to predicates. Ideas can be represented by points and connections to other ideas by lines. Neurons linked to neurons. What could be more fundamental?" [1]

# 2 - The Problem of Complexity

Broadly, the issue this thesis is concerned with is about how a creative can and might want to organise their work, so that the complexities of them are manageable, and so that they are reusable and referable by their future work. This is not necessarily a universal desire. For many artists, designers, and teams, the amount of control allotted to them by standard organisational processes and tools is enough. Indeed, these methods have been no obstacle to the creation of many fantastically sophisticated works of art. 

There is no substitute for active and consistent engagement with the process. Nor is there one for skill and experience. However, there is always room for improving the tools we use or explore alternatives, whose purpose is to augment our creative abilities. No matter the skill and focus of a creative, their work will to some degree be limited by their tools. The motivations laid out here are salient to creatives who consider themselves detail-oriented, and wish to reserve the right to be intentional with any aspect of their work. 

The tools used for understanding and mapping large creative works are often digital mirrors of physical tools, inheriting their limitations. They are artifacts of thinking, but poor substitutes for it. There is imprecision in how the raw mental material gets translated to external mediums. Creative works are conceptual structures; they originate from and end up in human minds.  

Throughout the whole experience of a work, the audience has expectations. There are, roughly, the initial expectations that are there when the experience begins, expectations set by the beginning of the work, and expectations about the ending of a work. Whatever happens in the experience can alter and set these expectations, often predictably. A big part of what a creative does when making their work is composing it so that they elicit, meet, and subvert their audience's expectations in a rhythm that makes the experience engaging and rewarding. The structure of the work determines the experience. 

Whether or not there can be objectively better or worse ways to structure works is not relevant. It is sufficient to state that creative's have a persistent need to understand works in terms of their parts, and the relations between them. It is argued that creatives want to, and should know more about their world than they tell the audience. As one interviewee put it, 

_"We do a lot of work to process the game world or animation world to a certain point, after which we can tell its story. Because if we don't have that, it's a bit like missing gravity from the physical world. Nothing falls if you put an object there. It's like when you start developing that world and story, you need to understand how that world works yourself. So you can put characters there, and things start happening."_[2]


## 2.1 - Overviews, Consistency, and Cohesion

The content and substance of any creative work can be broken down, categorised, divided into and measured by arbitrary units in nearly limitless ways. This should be self-evident, if not only for the fact that humans through millennia have indeed done so, with all the ways that creative works have been structured and analysed. 

A myriad of principles have been and still are proposed for what makes good art or good design. Some are debatable, but others have stood the test of time and are general enough to apply to all mediums. Internal consistency is one of those principles, and the need for it is only increased as a project grows in complexity. Consistency and cohesion are why one can not make a great work just by chaining together individually interesting parts. When speaking about how player interaction shapes a game's development, an interviewee mentioned, 

_"... if you just ask what people want in the game, you might end up with a kind of Frankenstein creation that has no head or tail."_[3]

A creative work needs a head and a tail. Its constituent parts need some shared qualities to bind them together, to make them make sense as a cohesive whole. The general and the abstract set the rules for the specific to follow. 

It is crucial for creatives to have the tools to track and maintain internal consistency across all scales of a work. This only becomes more difficult as a work grows larger and more complex, encompassing more material that has to be harmonised. To even begin tackling this challenge, and start organising the patterns in their work, the creative must first be able to see them. 

There is a specific continuum this thesis is concerned with, which exists within all creative works. It is the quality of how easy it is to see the entire work at once, at a single point in time. This quality determines the degree of freedom the creative has to apprehend the totality of work purely at the pace of their own thinking. Put another way, "how easy is it to make a complete overview of this work?" A painting sits on one end of this continuum, a novel near the other, and games arguably at the very end. Sequential mediums such as comics or movies are somewhere in between. For ease of reference, we can call this quality "perceptual immediacy". 

Complexity makes it more difficult to have a lot of perceptual immediacy. Both together determine a third quality, which is how easy it is to find instances of a specific pattern within a work. That quality will be covered more in depth in section 2.2. 

There are many mediums that could be covered in the following examples. The purpose of this section however is not to be exhaustive but to illustrate and build intuition around 

### 2.1.1. - Visual Mediums

Singular images, such as paintings, drawings, photographs and so on, are entirely in view at once. The viewer is free to look at whatever part of them they wish, in whatever order and pace they desire. There is no hidden information. If the creative knows what patterns to look at and evaluate, they can immediately do so. An image can still be incredibly complex, but that complexity is made manageable by the virtue of there being no parts of it that can fall out of sight and thus be ignored or forgotten. 

![An image.](masters_thesis/211_painting.png)

These observations apply to both the creative and the audience of an image. A creative may influence the viewer's gaze by carefully organising the visual patterns, using techniques such as contrast, harmony, regularity, variation, and many more. [3]. They can not be fully dictated, as the viewer always has a choice to look somewhere else. 

Contrast the singular image with a comic book. The entire contents of one can be arranged on a wall, so it fulfils the criteria that the whole work can be visible at once. Still, there are two main elements that make it more difficult and thus time consuming to understand, aside from the obvious potential increase in complexity. They are the decrease in clear visual hierarchy, and the introduction of text. 

![Pages of a comic laid out in a grid.](masters_thesis/211_comic_pages.png)

With a comic, focusing in on a specific pattern in the imagery or the story already requires parsing through the entire thing, and making note of or directly adjusting the relevant occurrences. 

All the pages are (in the vast majority of cases) of equal size. Laying them out in a grid creates a uniform texture, where the normally attention-grabbing shapes of individual pages can never exceed the limits of their borders. There is no intentional visual focus point for the grid of pages. In an image, it is fine for there to be less detail in areas where the eye is not meant to be directed. In a sequence of pages this is less so, because even if there is variability in the detailing across the volume, each page is still intended to be read, looked at, and experienced, individually. Each is meant to get a reader's full attention. Still, there is considerable visual variation that the creative can make use of to quickly navigate a wall of pages. It wouldn't take long for them to spot all instances of a certain character or environment.

Introducing text makes a bigger impact on speed of apprehension. People generally can not tell what a word is without reading it, seeing its letters. The outline shape or dimensions of a word tell us very little. The patterns that occur in text can only really be discerned from up close, by actually reading them. Large language models are fairly good at this, but they are still an incomplete solution, and can not be solely relied upon. 

Novels and other formats of pure writing have, predictably, the same characteristics as text in comic books, but without the support of images in apprehension. Text can be skimmed, sometimes even effectively, since there is often a logical progression between ideas. Reading two sentences that are somewhat apart can give you a vague impression of what was written in between. It is also common practice in writing for each paragraph to be summarised by its first or last sentence[?]. 

### 2.1.2. - Audiovisual Mediums

Film builds on these complexities and adds another dimension. It should be evident that introducing movement greatly increases the amount of visual information. With a film, even if it is a short animation, it becomes unfeasible to lay out all its frames out on a wall. Even one minute of film, at a standard rate of 24 frames (images) a second, contains 1440 individual frames. To be at all comprehensible, that visual information must be compressed. Commonly the frames are grouped into the scenes or shots they are a part of, or according to a major action in a shot. A frame is chosen from that group to represent it. A major change in composition commonly signals a change in group. [4] This is acceptable, because most of the visual information within a single shot is redundant. 

![A films storyboard with dialogue and text descriptions.](masters_thesis/211_film_storyboard.png)

In this progression of examples, film is the first to contain sound. Sound is by definition hard to visualise. It encompasses our second major sense[?], an entirely different way of perception. Inherently temporal, sound demands that it is perceived at _its_ pace. We can not direct our ears to hear different parts of a song like we can point our eyes at any part of a painting. The sound waves must be actually produced. 

To make sound "glanceable", it must be converted to a visual representation, and all possible conversions are lossy. Waveforms tell you the volumes throughout the sound, but not what it sounds like. Sounds and music can be labelled, or they can be mapped to sheet music or a piano roll. But no matter the representation, some information will have been selected, and the rest will have been discarded. Here appears again the idea of selections, the topic of the next section.

![211_sound_visualised](masters_thesis/211_sound_visualised.png)



### 2.1.3. - Interactive Mediums

Video games are arguably the hardest medium to understand holistically. Interactivity turns the flow of the experience from a linear movement from beginning to end to a winding path with branches and loops. There is of course a tremendous amount of variation within the medium, but even with the simplest of games you will be hard pressed to fit all of a game's distinct contents into view.

A game project might employ anchors that can be quickly referenced and serve to encompass some or multiple foundational design decisions. These act again as foundational, general characteristics of a project that are not meant to be contradicted by any specific parts of it. One interviewee at a large mobile games company stressed the importance of these, calling them "visual targets".

_"Primarily the vision forms through visual targets and always culminates in visual targets. Often the most precise form is a fake screenshot of what the game will look like when it is finished. _[5]

_"The evolution in defining a vision goes from abstract to descriptive and from descriptive to specific. In practice the first target could be a textual description of what the game should look like. Then come mood-boards and concept art which refine it toward being more specific. At some point the vision begins to form into a visual target, which at least in our case is a fake screenshot of what the game should look like."_[6]

_"For me, the visual target is specifically a communication tool. It's partly the way that the vision is found, but it's also how we can remove ambiguity from that creative project. Because in my view, our language is a very imperfect tool for defining visual things, and most of the issues in creative work relate to how, even if we talked about the project, we each have in our heads completely different views of what it looks like. ... When we have a visual target, it's as specific as it can get."_[6]

Projects in all mediums can and often do employ a similar process, where the ground rules are set for the project and become its north star. For larger projects in larger teams, this only becomes more important, because production is time consuming and expensive. The creative process becomes highly intertwined with production, so discovering that there is a severe contradiction very late in the process carries a heavy cost. [?]


## 2.2 - Focus and Selecting Patterns

The creative can know about the patterns they care about either implicitly or explicitly. Implicit knowledge here means the intuitive sense and memory they form after having passed through the totality of a work multiple times. They get a more or less vague impression of the frequency and ratio of certain types of elements or experiences presented by their work. Though the accuracy of such intuition should not be underestimated, there are factors limiting it. There will always be some degree of vagueness. The intuition can point the way, but making it actionable still requires going to the material and taking a direct look. 

Explicit knowledge refers to the conscious, documented understanding of patterns within a creative work. Unlike implicit knowledge, which relies on intuition and memory, explicit knowledge involves actively identifying, recording, and analysing specific elements and their relationships. This approach allows creatives to objectively track the frequency, distribution, and interplay of various components in their work. By making this information tangible and accessible, explicit knowledge facilitates more precise adjustments and intentional design decisions. It also provides a reliable reference point, mitigating the risks of overlooking important patterns or misremembering crucial details. In complex projects, where the sheer volume of elements can overwhelm intuitive understanding, explicit knowledge becomes an invaluable tool for maintaining consistency and achieving desired creative outcomes. 

Both are valuable and necessary. They form a dichotomy. On one hand there is the fast, reflexive, somewhat vague knowledge, based on past experiences. On the other, an objective external representation which can be perceived and modified directly. 

As the complexity of a project starts to rise, it quickly becomes unwieldy. All of the elements and their interactions cease to fit into neat, singular representations. Everything turns into visual noise, fighting for your attention. That is, if there is even an attempt to bring together everything visually. Most of the time the elements that the project consists of become spread out and organisation becomes its own task. 

In both cases, effort and focus becomes diluted. In order to make meaningful progress, there has to be focus. There has to be concentrated effort in a narrower area of the work, so we are not overwhelmed by information and can comprehend what we are working with. In other words, a focus on a particular pattern of the whole, and a reduction in the total mass of material. The creative needs the means to select, out of the nigh uncountable amounts of patterns in a project, the ones they wish to focus on. 

### 2.2.1 - Externalisation

Briefly, a summary of what exactly are the benefits of creating physical representations in the first place. 

Externalization of knowledge improves both knowledge retention and communication[6]. Externalization often means visualization, because a visual layout of information does not impose a tempo or direction for the consumption of that information. A written treatment imposes an order and a direction, and an audio recording also imposes a tempo. Even if you change the speed of a recording, all sections are sped up or slowed down at the same rate. What exists in the mind of the designer and the storyteller is a structure, a mental model, of the creative project. The creator in question can then navigate this structure in their own minds[?]. 

Externalization is the creation of a representation of this structure. The representation is then given to other people to navigate and explore, just like the original creator can do with the mental model. It stands to reason that the more closely this external representation matches the creator's internal model, the more information can be successfully transferred to others. 

Another benefit of an external representation is that it does not covertly change in subtle but potentially important ways in the mind. Memories change when they are accessed in the mind[?]. This happens both consciously and unconsciously. While remembering something, you might come up with a new relationship between two previously independent ideas. Or not recalling some connection while remembering others weakens that memory in relation to those others, changing the overall structure. The brain does not seem to distinguish between access and modification[?]. It is not possible to simply access a memory without risking contamination. 

Physical, external structures can, however, make this distinction. 

These benefits apply both to teams as well as work done by individuals. Due to the nature of the mind, how memories change over time, and how cognition and perception can be modulated by emotions and other states of mind, it can be argued that the individual is also working in a team. Communicating clearly to yourself across time is as important as to others through space (and time, too). 

_"We have to have discussions occasionally where we break down the entire game mechanics. Just at a mind map level. We draw it out, for example with post-it notes. We draw it out and see if we've understood this process and mechanics in the same way. Because even there, dissonance can occur, when we've discussed making this kind of game, we start making it, someone has misunderstood some detail. Then we're in a situation where we've already developed the game in some direction, and then someone says, why does this work this way, someone else responds no, this should work this way. We realize that some small detail definition has been left out. Then it's usually necessary to take a step back, open it up and go through it."_[3]

### 2.2.2 - Mapping Patterns

There are many ways to visualise patterns. Many types of diagrams, many categories of maps. Different kinds of patterns are suited toward different kinds of visualisations. The focus here is on a few observations on their general characteristics and shortcomings. For brevity, all visualisations will be referred to as maps in this subsection. 

Patterns vary in every conceivable way, among each other and also within themselves. They vary in density, amplitude, width, breadth, or any other adjective you could come up with. Breadth, or scale, is of particular interest here, because it is the main characteristic that grows with the project and its complexity. A small project can not physically fit into it larger patterns. A painting does not contain a film, but a film can contain paintings. ==This and the next paragraph should be revisited, needs much more clarity==

This is the quality that varies when adjusting your distance. When you "zoom in" or "zoom out". When you zoom in, you deliberately restrict your view to an area of a work, allowing you to see the smaller details of it clearly. The trade-off is that you lose sight of the rest of the patterns, so you can not know how your area of focus relates to the whole work. When you zoom out, you see the "big picture", and you are able to observe patterns that are more general and abstract, but you can no longer make out the details of any particular area [2]. Creating a cohesive work requires the creative to travel, to move their view through various distances, observe the work both from up close and form afar. 

In the case of an image, such as a painting, this movement is seamless. In physical space, the painter can move their head and eyes, and in a digital medium, they can enlarge the image on the screen and move the framing around. The change between close focus and far focus is continuous and fast. The painter is granted access to any scale at any moment. They can look closer, to work on the details, or they can move back to see the entire image. They pick and focus on a pattern that they are interested in modifying. 

The advantage of singular images in particular is that the elements and the final work are inextricably linked. Added details in some corner of the work will be immediately visible in the overview. The overview is in a sense a physical property of the arrangement of its parts, automatically there. This goes two ways, since making large sweeping changes with a far focus will have those changes also reflected when close up. This is a luxury that is lost in larger projects which don't have an obvious singular visual representation. 

In a larger project, overviews have to be created manually, as has been the case for one of the professionals interviewed for this thesis[3]. More often than not they are disconnected from the substance of the project. Making changes to the map only changes the map, not the underlying terrain. Those changes have to be propagated manually. If changes are made to the terrain, the map has to be manually updated. Digital tools that aim to alleviate this manual work generally focus on one or the other, but not both[?].

## 2.3 The Body of Work and Digital Material

A creative work does not exist in a vacuum. It and all of its identifiable elements exist in context with other works and everything and anything in culture that could be associated with them, no matter the manner of comparison. Whether there is desire to be mindful of this context or not is irrelevant, for the creative can not avoid being influenced by their environment. Even if they could, there is still the matter of their audience's experience being affected by how they perceive the creative's work in relation to their other experiences. There is clear incentive to be conscious of at least some of the ways in which one's work is situated in the broader arena. 

It is useful to know how a creative's project relates to the rest of their own body of work, and the digital material at their disposal. Inevitably, there will be reoccurring elements within their own work. Repeating themes, assets, characters, and such. A creative could well be interested in knowing about and managing such occurrences, for they weave the connections that unify all their projects into a single conceptual whole. They might want to know if some element has repeated often in their work, signalling a need for variation. Or vice versa, if some interesting motif is under-explored, there is an opportunity to add further depth. There is benefit in the ability to compare the substance of creative projects among each other. 

Creatives may amass incredible amounts of digital material. Project files, notes, references, assets, among other types. Effective file organisation is about making retrieval of specific files quick and easy. 

File systems are tree structures. They have a root, and they divide into branches. Branches may divide again but never merge back together. At the ends of branches there may be leaves, which are the files. This is a well established structure for file systems which reflects the physical world. After all, physical objects can only exist in single locations at a time.

In the digital realm this becomes an arbitrary, legacy limitation. Objects can and do belong to multiple categories. For retrieval, it is not enough to know what it is you are looking for, you also have to know the logic with which the file system is organised. Many file explorers and asset managers include a tagging system for adding labels to files and folders, which alleviates the issue somewhat. Still, many users report a preference toward folders rather than tags, finding the latter more frustrating to work with. [7]

A creative might not always know what they need to find. They know they need something, but they need some suggestions, some stimuli, to decide on what that is. Users have a significant preference for navigating their file systems rather than searching them directly [8]. This is the case even when they know the name of that which they are looking for. There seems to be a cognitive ease to navigation that is sometimes explained by brain areas for spatial cognition being larger than that of linguistic processing [8]. Given the argument that points to the abstract being an offshoot of the spatial, it could instead be that the mind prefers navigation by intermediate steps instead of teleportation because that is how we must navigate the physical world as well. Moving by small steps allows us to keep track of where we are. Teleportation disrupts our sense of position, requiring us to reorient ourselves all over again.[8]

Navigation, or sometimes referred to as orienteering [9], is less of a burden on the mind than search. When orienteering, adjacent locations that are in view act as suggestions for where to go. These are contextual cues directly available to perception. It is easier to recognise a thing than to recall it consciously from memory, and sometimes recall seems impossible no matter how much we try to "jog our memory". 

In the event that the creative does know what they need, they can use tags, file names, or other types of metadata to make it easier to directly search for what they are looking for. They might make the attempt to jump to what they want to retrieve, an act which could be aptly referred to as teleportation[9]. In practice, users rarely reach their final destination just with search. Instead, their initial search lands them in a general area from which they the have to navigate manually. Qualitatively there is little difference between beginning one's exploration from the results of a keyword search or the root of a hard drive. 

To be able to navigate within a structure, it must be interconnected so that there exists at least one path between any two points in it.  While tree structures satisfy this criterion, they are not that conducive to exploration. It is possible to move up and down in a tree structure, but not sideways. The only spatial reference point shared by folders and files and used for navigation is the parent folder. Orienteering in modern file systems means linear scanning of directories or tags, sometimes punctuated by keyword search. Though this is not a crippling limitation, it is still a limitation. There are a limited number of paths that can be taken, and therefore a limited number of cues that can inspire exploration[2].

The internet has solved this issue with hyperlinks. Hyperlinks turn each web page into a place, which is connected to other, adjacent places. This makes it easy to travel between any arbitrary pages. This quality has likely given rise to the phrase "surfing the web" due to its cognitive ease. It is so effortless to navigate through these links, many of us do so unconsciously. On Wikipedia for example, this is called a "wiki rabbit hole"[9]. 

The major operating systems do have features that mimic this interlinking of locations in their file systems. They have different names (alias, shortcut, symlink) but functionally they are basically the same, allowing access to a file or folder from multiple arbitrary locations in the directory tree. Funnily enough, out of all the variation that exists in the file management habits of users, the one thing they seem to have in common is that they do not use these shortcut features. [8] Perhaps them not being compatible or transferable between operating systems is another reason for this. Even if they were more popular, these shortcut features are not a full stand-in for hyperlinks. There is still few ways to connect two arbitrary files together to indicate a semantic relationship.

The digital landscape of a creative's body of work presents unique challenges in organization and retrieval. Traditional file systems, with their rigid hierarchical structure, often fall short in representing the complex web of relationships inherent in creative projects. While features like tags and shortcuts offer some flexibility, they fail to capture the full spectrum of semantic connections between different elements of a creative work. This limitation points to a need for a more flexible, interconnected system of organization. A graph-based structure, where any element can be directly linked to any other, regardless of its hierarchical position, could provide a solution.


# 3 - Node Graphs as Maps of Patterns

Creative works are conceptual structures. They originate in the minds of their creators, and are experienced in the minds of their beholders. The physical, objective structure is only a means to this end of transporting the creative's vision to their audience. So the work moves from mind, to matter, to mind again, being recreated at each step. 

Finding the most appropriate form for representing thought requires approximating how these structures exist in the mind. This follows what some researchers have dubbed the Congruence Principle, which states that the external representation should match the internal representation. [7] Maintaining such congruity ensures that there is as little loss or distortion of information and detail at each conversion step. 

This chapter will try to determine the most appropriate visual metaphor that can be applied to both the internal and the external. It will move forward with node graphs as the chosen metaphor and explore their use and utility for modelling creative works in a static and a dynamic context. 

## 3.1 - Conceptual Space

In order to even be able to think about a constantly moving, fluctuating, incomprehensibly vast world around us, we have to carve out pieces from it. We freeze those pieces, turn them into concepts, assign labels to them, all so that we could act on them with our minds. We study their form and their structure, because it is the structure that connects the parts to a whole, and keeps it from falling apart. We are instinctively interested in structure, because we must simplify the world to even begin to understand it. [2] 

Barbara Tversky argues in her book "Mind in Motion" that our cognitive processes are fundamentally spatial in nature. We evolved this way because we learned to act in the world, in space, before we learned to think, and evolution "likes" to come up with new uses for old structures. That is why, from the basic units of ideas connected by relationships, to the complex networks of concepts that form our understanding of the world, spatial thinking underpins our mental operations. [2]

Spatial thinking can be broken down into more component characteristics. The organism must be able to identify stable points in the environment, and know how they are positioned relative to each other, to be able to navigate between them. Both these processes were originally discovered by researchers studying the brains of rats, in the forms of place cells and grid cells, respectively. [2] These brain structures are then reused, as the foundation for abstract thought. The space in which this abstract processing happens has appropriately been named conceptual space. 

Conceptual space is the abstract realm where our minds process and organize ideas. In conceptual space, places are "integrated sets of features, ... as individuals, independent of how they are interrelated", handled by place cells. Grid cells represent relations between those abstract ideal places, whether they are spatial, temporal, or conceptual. Crucially, these spatial relations are not stored as absolutes, but approximated, reconstructed every time they are accessed, and so they depend on a frame of reference. The study that best illustrated this asked participants to estimate the distance between the Eiffel Tower and an ordinary location, "Pierre's house", in both directions separately. Remarkably, they judged the distance from the house to the tower to be shorter than from the tower to the house. The more conceptually significant landmark "pulled in" the less significant place. [2]

This same distortion happens with cognitive reference points, such as a Picasso or an Einstein. "Cognitive reference points create asymmetries of judgments of similarity just as spatial reference points create asymmetries of judgments of distance. Similarity, after all, is a measure of conceptual distance." [2] Just as the Eiffel Tower 'pulls in' Pierre's house, significant concepts in a creative work may exert a stronger influence on the perceived relationships between elements. This phenomenon has implications for how we might structure and interact with node graphs representing complex creative works, where key ideas or characters could act as conceptual landmarks, influencing the organization of surrounding elements.

What type of visualisation matches these characteristics? Node graphs. More commonly known as mind-maps. Tversky says: "Boxes and links turn out to underlie an enormous swath of our thinking, maybe all of it." [2]. She goes on to describe the variety of forms that this simple idea can take. The fundamental building blocks of boxes and links can be arranged in an infinite amount of ways. They are incredibly flexible, so much so that other visualisation types can also be expressed in terms of boxes and links of different shapes and sizes. From this point on, boxes will be referred to as nodes and links as edges, to better conform to the terminology used in software and computer science. 

![310_tree_and_map](masters_thesis/310_tree_and_map.png)


What is a map, if not a node graph of place names with the edges hidden and a background image?

This spatial nature of cognition makes node graphs particularly apt for representing creative work. They mirror our mind's innate way of organizing information, allowing creatives to externalize their mental models in a form that's intuitively navigable and manipulable. By leveraging this natural cognitive tendency, node graphs can potentially offer a more effective means of structuring and exploring complex creative projects and bodies of work. In the next section, we will explore how these cognitive tendencies have been leveraged in the development of static graph representations, setting the stage for our discussion of dynamic node networks.

## 3.2. - Static Graphs

Node graphs simplify and map more complex patterns. Most people are familiar with using mind-maps to map out the conceptual relationships on some specific topic. Often they are created as throwaways simply to make sense of a topic and build a mental model. As noted in an earlier section, changing the underlying work that the map refers to makes the map obsolete, requiring then that it be updated or replaced. 

This section will cover a variety of examples of node graphs representing parts of hypothetical creative works. As with previous collections of examples, these are not meant to be exhaustive, but illustrative. The example graphs may also not be the optimal ways to represent their particular patterns. Sometimes the optimal way may not exist, and most other times finding it will require going through multiple iterations of improvement and polish. While this is appropriate for infographics intended for publication, this amount of work is likely not justified for throwaway node graphs. 

The examples will also run into several limitations and challenges presented by purely static and non-interactive node graphs, showing that utilising the graph data structure to the fullest requires the ability to dynamically alter the visualisation. 

### 3.2.1. - Global and Local Graphs

Before covering the examples, there is a distinction that will be useful for their interpretation. Node graphs, as visual representations of interconnected ideas or elements, can be broadly categorized into two types: global and local [?]. Each offers distinct advantages and limitations in how they present information and facilitate understanding. ==This terminology is taken from obsidian. Citation needed.==

Global graphs provide an "objective" view of the entire network, without privileging any particular node or perspective. In these representations, all nodes and edges are displayed simultaneously, offering a comprehensive overview of the system's structure. This type of graph is allocentric, or egoless, not viewed from the perspective of any subject[2]. This bird's-eye view can be particularly useful for identifying large-scale patterns, clusters, or central nodes that might not be apparent from a more localized perspective. However, as the number of nodes and connections increases, global graphs can quickly become cluttered and difficult to interpret. [?]

[figure: example of a "global" graph.]

Local graphs, conversely, are always viewed from a specific "point of view" or root node. These graphs display only the immediate connections of the selected node and perhaps one or two degrees of separation beyond that. This approach, utilized by software like Obsidian, provides a more focused and manageable view of the network. Local graphs are particularly useful for exploring the immediate context of a specific idea or element, allowing users to navigate through the network by shifting their point of view from one node to another[?]. As will be made clear later, this property also makes them suitable for representing the asymmetry of relations mentioned in the previous section. 

[figure: example of a "local" graph.]

The choice between global and local graph representations often depends on the specific needs of the user and the complexity of the network being visualized. In the context of creative work, both types can serve valuable roles at different stages of the process or for different types of analysis. Though they are useful, not all node graphs can be neatly slotted into either of these categories. They will be revisited in the next section covering dynamic graphs.

### 3.2.2. - Examples

Consider a graph for visualising the appearances of characters in scenes. In this extremely simple example, there are five scenes and three characters. Each appearance is denoted by an edge from a character to a scene. 

![322_chars_and_scenes](masters_thesis/322_chars_and_scenes.png)

Multiple pieces of information can be gleamed from this image. One can see which character appears in which scene, but also how many scenes a character appears in, and how many characters appear in a scene. Because of the many-to-many connections present in this figure, it is categorised as a "global" or allocentric graph. If it were to select a single node and omit all except its direct connections, it would become a local graph centered around that node. 

[figure about that transformed local graph]

With few nodes in the graph, it is readily understandable. Adding more nodes for a longer film with more characters would quickly increase its complexity. 

![322_morecharscenes](masters_thesis/322_morecharscenes.png)

==Insert many, many more examples here.==

In game development, spatial thinking is highly useful if not crucial for managing complex systems of mechanics and narratives. As one game industry professional noted in our interviews, their team regularly uses mind maps to break down and understand game mechanics. They create these visual representations to ensure everyone on the team has a shared understanding of the game's structure and processes.[3]. This practice of "opening up" the game's systems through spatial diagrams illustrates how node-like thinking naturally emerges when dealing with intricate, interconnected creative works. The mind map becomes a shared external representation of the team's collective mental model, facilitating communication and problem-solving. 

These examples illustrate how the spatial nature of thought naturally lends itself to node-like representations in creative work. By recognizing this fundamental aspect of cognition, we can begin to see why node networks may offer a particularly suitable method for externally representing the intricate web of ideas, elements, and relationships that comprise creative endeavors. 

==Put all standalone examples here, then expand on how a digital/dynamic tool could improve cognitive ease when modifying and moving between the individual graph views.== 

## 3.3. - Dynamic Graphs

This subchapter talks about how digital tools can provide more opportunities for creating affordance[10] in node graph visualisation. Digital graphs can be altered at will according to the needs of the situation, and this dynamicism can be leveraged to more closely model the structure and process of abstract thinking. 

Intuitively it makes sense that adding the dimension of time would increase the information density of graphics. However, research on the topic implies that this is only the case when the animation is controlled interactively. [7] In other words, the person seeking to understand the graphic has the ability to exactly control where they point their attention and when, something that is taken for granted in still images, but limited when the graphic is moving on its own.

This section will focus on the key affordances granted by introducing interactivity to node graphs, which will be relevant to the presentation of the software prototype in the next chapter.

### 3.3.1. - Automatic Layouting

Computers have the ability to calculate the layouts of graphs automatically according to algorithms. It is common for example for graphs to be defined with a text description, and for an algorithm to then turn it into an image. 

[insert example of text description of graph and generated image]

The algorithm for the preceding figure is as follows: yadda yadda yadda
==end example==

There is another way of calculating the layout of a graph which involves simulation. These are often used when the amount and kinds of connections between in the graph are too complex to be laid out according to fixed rules. In a force-directed simulation, properties are assigned to the nodes and the edges and a physical simulation is run on them. It is common for example to treat the edges as springs. Springs have a certain defined rest length, and they will always seek to return to that length, resisting other forces both expansive and compressive. Nodes are commonly programmed to push on each other in order to avoid overlap. Usually there are refinements added to this crude simulation, but a typical outcome can be seen in the below example. 

[the below example]

Additional constraints can bring the initial simulation closer to something that a user could intuitively navigate. Nodes can be clustered in neighborhoods according to their relations, and particularly influential nodes (those with many connections) can be scaled up to visually communicate their influence. Edge crossings can be minimised, and the edges' lengths can be intentionally set to be either uniform or reflect some important property[?]. The simulation and its author are limited in how much they can presume to know about a user's preferences, so ideally, the user would be given tools to quickly make adjustments to the layout. 

Algorithms simple and complex can be used even after the initial layout calculation to adjust the placement of elements in bulk, following the user's impulses. Given enough variety and flexibility in layout functions, a user well accustomed to an application might seldom need to resort to one-by-one placement. The more they can do from muscle memory, the shorter the distance will be from their mental processes to the external representation of those processes. 

With especially large graphs, algorithms for simulating them can degrade in performance, and as we know, stuttering and frame drops do not usually denote a comfortable user experience. Of course, today's computers are powerful enough that this is rarely an issue. And since massive graphs are difficult to make sense of anyway, by the point they reach a certain size, there will be a need to constrain the view to what is cared about in the moment. 

### 3.3.2 - Filtering and the Data-View Separation

The discussion of node graphs thus far has often blurred the line between data structure and visual representation. For small, stand-alone graphs this is fine, they can even be the same thing. However, in practical implementations, like in the case of a larger graph database, distinguishing between these aspects is crucial.

In digital systems, separating data from its visualization offers several advantages:

1. Flexibility in Representation: The same underlying data can be visualized in multiple ways, allowing for different perspectives on the same information. 
2. Scalability: Complex data structures can be managed efficiently, even when complete visual representation would be overwhelming. 
3. Interactivity: Users can manipulate the view without altering the underlying data, enabling exploration without risk of damaging the data. 
4. Adaptability: The visualization can be updated without restructuring the core data.

This separation enables features like dynamic filtering. In the context of large graphs, filters allow users to focus on specific subsets of data without changing the underlying structure. For instance, users might highlight nodes meeting certain criteria, show only connections of a certain type, or adjust the visible 'depth' from a focal node. This addresses the need for selecting specific patterns covered in section 2.2. 

These filtering capabilities, combined with the data-view separation, allow for a more manageable and insightful exploration of complex node structures. Users can dynamically adjust their view based on their current needs or interests, revealing patterns and relationships that might be obscured in a static, unfiltered representation. Techniques like semantic zooming[?] and dynamic fish-eye views[?] exist to simulate moving through different "scales" of a graph without losing context, as defined in section 2.1. 

For creative work organization, this means connections between elements can be stored in a graph-like structure, while the visual representation is tailored to specific tasks, or stages of the creative process. Revisiting the examples from section 3.2, we can now see how dynamic filtering and multiple views could enhance these representations:

1. A writer working on a complex novel could switch between views of character relationships, plot timelines, and thematic elements, all derived from the same underlying data structure. They could filter to focus on a specific character's journey or zoom out to see overarching themes.
2. A game designer could navigate between high-level gameplay loop visualizations and detailed mechanic breakdowns, filtering elements based on player feedback or development priorities.
3. A filmmaker could transition from a scene-by-scene breakdown to a character arc view, filtering by location, time, or emotional tone to gain new insights into the narrative structure.

This flexibility in visualization, combined with powerful filtering capabilities, addresses the need for both overview and detail in complex creative projects, as discussed in section 2.2. It allows creatives to select and focus on specific patterns or aspects of their work while maintaining awareness of the larger structure.

Moreover, this approach to node graphs emphasizes the distinction between the conceptual structure of a work and its various possible representations. This aligns with the cognitive processes described in section 3.1, where our minds construct flexible, context-dependent representations of conceptual spaces.

By providing tools that mirror these cognitive processes, dynamic node graphs with filtering capabilities offer a powerful means of externally representing and manipulating the complex conceptual structures inherent in creative work.

### 3.3.3. - Continuity and Orienteering 

Continuity is the property of being able to transition between two states smoothly. A dynamic graph exhibits continuity when its elements do not teleport to new locations, snap into new sizes, or appear and reappear jarringly. Instead the elements animate smoothly, giving the user time to keep understand the transition between the two states. 

In a dynamic context, the notion of a local graph again becomes useful. This is because dynamism and interactivity afford the user the ability to navigate a larger graph through the lens of local ones. The act of looking at a graph is turned into an exploratory, embedded activity; the user is situated in a "place" somewhere in the graph and can see a certain distance or "depth" away in all directions. They can see what's directly adjacent. Every linked "place" presents itself as an option for navigation, and can be thought of as soliciting the user and inspiring them to act[11]

Turning a web page and its hyperlinks into a graph is a good way to illustrate this. In the figure below, a (website page) is designated as the root node of the graph, and its connections are the other web pages that it links to. Should the user navigate to one of these pages, that page would become the root node and its connections would be connected nodes, and so on. 

[figure of a graph made out of a web page and its links]

Functionally there is no difference between navigating web pages normally and using a graph to do so. The difference lies in the presentation and the salience of the travelling metaphor. Displaying the hyperlinks as visually distinct locations radially around the current position makes it clear to the user as to what their options are, whereas hiding the possible paths within the text content of the page would dilute the user's awareness of navigational possibilities.[?] For normal websites this could be a moot point, for they would have to hide or de-emphasize the actual contents of the page. For mind-mapping and digital whiteboard software, this trade-off seems generally worth it. The software Miro, for example, supports nodes ==what are they called in Miro?== for longer text blocks and documents, but they are minimised in their canvas, showing only a preview snippet, and have to be opened in a separate panel to be fully read. [?] This design decision and others like it speak to the value of spatial arrangement of visual material. ==this sentence feels off somehow==

For creative works, multiple static graphs could be created, visualising some collections of relationships. Inevitably, many of the nodes in these graphs would be shared between them. They could reference the same characters or locations, just different aspects of them and in different contexts. This means that they are in fact part of the same network of concepts, even if the images or files are disconnected. Connecting them would then introduce the ability to navigate them as a cohesive web of ideas, affording all the possibilities for solicitation and exploration. 

Consider two graphics. First, a timeline where characters are placed on a horizontal axis according to when they initially appear in a story. Second, a map of a geographical region with another set of characters are placed according to where they live. One character happens to appear in both of these graphics. When thought of as local graphs, it becomes clear that that character is a pathway, and intermediary place between the two. The character's local graph would then contain the timeline and the map as adjacent locations that could be traveled to. 

[figure of the three adjacent graphs]

Interconnecting initially disparate visualisations like this would allow a creative to ask, "where else does this element appear?" Adding nodes for all characters and a node representing just their category would introduce another path to travel along, and one could theoretically do so for all other distinct concepts and categories within a creative work. Interconnecting all elements by their relationships then creates a unified conceptual structure that is likely to closely match the network of ideas in the mind of the creative. 

# 4 - Karta

The motivations in chapter 2 and the principles in chapter 3 have lead to the prototyping and development of a software tool named Karta. This chapter will outline Karta's main concept, design goals, working and planned features, as well as relevant(?) technical implementation details. 

Its chief design goal is to implement the ability to connect disparate parts of creative projects or entire bodies of work together into one cohesive and navigable graph. More precisely, it indexes the entire file system so that arbitrary connections can be made between any nodes inside it. Virtual nodes can also be created, which don't represent anything real on the file system, but are useful for things like text notes or other small units of data that do not necessarily need to be files. Additional data could be added to any node or edge that could be used for filtering queries or hiding specific nodes or connections from view. 

As of the writing of this thesis, two separate prototypes have been developed, the second of which is being refactored to better support further development. The basic features of indexing the file system into a graph representation as well as local graph navigation and force-directed simulation have been implemented. 

The rest of the features in this chapter are not implemented but have been determined to be technically feasible based on cited sources and examples of existing software with similar features. Though they could technically be considered future work and be placed in that chapter, they are a thought-through and integral part of the current concept of Karta. Their technical implementation details are broadly decided, but could not be finished in time for this thesis. 

Karta's current iteration is written using the Rust programming language[11] on top of the Bevy Game Engine framework[12]. (Insert reasoning here)

Karta is open-sourced under the GPL-3 license. The source code can be found at https://www.github.com/teodosin/karta. 

## 4.1 - A Nodal File Browser

Karta is an augmented and specialised file explorer. It indexes a section of a file system into an acyclic graph. The user determines the root directory of the graph, so that they can limit the reach of the program to only the sub-directories that are relevant to their work. There is no need to index directories at the file system's root that are only there for the function of the computer and the user does not interact with. This same approach to creating a user "vault" is used by Obsidian[?], which has a similar approach to leveraging the file system. 

### 4.1.1 - Market Positioning

The creative industry is incredibly varied in its choice of tools. All aspects of creative projects are complex, and in this environment and innumerable number of tools have emerged for every conceivable niche and use case. Many small areas of the entire field of computer graphics are so complex in themselves that specialised tools get developed with no other purpose than to tackle that area and do it well. It is typical for creatives to use a large selection of tools for different purposes and combine their outputs into complete projects. There is the concept of a "Pipeline", tailored to each creative, which means the [insert definition here]

Any new creative tool that gets developed is heavily incentivised to integrate with existing pipelines and play well with other software. Karta, as an organisational tool, aims to be compatible with most of all asset authoring software. If the project and output files end up in the file explorer, they are compatible with Karta. Therefore the potential positioning of Karta within the wider creative industry would be as a sort of in-between, transitional and organising layer for existing and established tools. 

Even with individual creatives, habits are entrenched, and directly competing with their existing tools is difficult. This applies to studios even more, since financial liabilities prohibit them from taking risks with unproven tools. Karta is at this point, a prototype and a concept, and therefore unproven. The less it competes with existing tools and processes, the better. 

This foundational decision for it to be a file browser is a natural direction for it, stemming from its position in the market, as well as the theoretical concepts covered throughout this thesis. 

### 4.1.2 - Technical Overview

In the refactored version, indexing will happen to an instance of the Agnesoft Graph Database[13]. For each folder and file in the user's vault, a node is created in the database, storing the path of the file or folder and other metadata relevant to the graph. Edges between folders and their contents are created automatically and tagged to distinguish them from other user-authored edge types. Upon creating a vault, the user is not starting from scratch but has their file tree available for the making of new connections. In the future, Karta would ideally poll for changes in the file system made elsewhere and update its indexing database accordingly. Challenges related to this are outlined in the relevant section later in this chapter.

In the current stable version of the prototype, nodes and edges are stored in individual text files. At the root of the user's vault, a directory is created, which mirrors the directory structure of the rest of the vault. For each node, whether they are a folder, a file, or a virtual node, a text file is created which stores all of that node's attributes and its connections to other nodes. This was to keep the indexing database human-readable and modifiable. Text files could also be easily managed by version control systems such as git.

The decision was made to switch to a proper graph database for the indexing. The main reasons were reliability and performance. A dedicated team such as the one working on AGDB is likely to have produced a more stable and robust codebase, which is more specifically tailored to the problem of handling large graphs. Performance-wise, the previous design of storing text files for each individual node meant that whenever a node is accessed in the software, a separate file would have to be opened and parsed, introducing overhead in the operating system[?]. Due to common scenarios such as opening a graph view with hundreds of nodes, and the requirement of having to navigate quickly through the entire network, this approach was shelved. Additionally, human-readability of the database was deemed likely unimportant to the target user-base of the software, which is artists and designers. The door remains open to implementing the text file storage as an optional extra feature, or simply having an export to text files feature like many similar software already do. 

Virtual nodes refer to nodes in the graph that do not point to a particular location in the file system. They only exist in the graph database. They are considered useful for semantically and conceptually meaningful nodes that do not contain enough data to justify separation into a separate file. The category is generic, and could contain a vast variety of custom nodes, such as web links and snippets, allowing a creative's network to reference information even beyond the file system. 

## 4.2 - Contexts and Relative Position

A Context is the term chosen for Karta's local graph. It is composed of a focal node, and all of that focal node's connections. It is a graph centered on a selected node. The user may move select any node in view, or through a search, and mark it as the new focal node. This will initiate a transition. Nodes that are visible in both contexts will animate between their two positions. New nodes are faded in, old nodes are faded out. This is to increase continuity when moving between contexts. If the spatial analogy is to hold, there should be no teleportation of elements, so the eye can follow them and maintain a grasp on how they move relative to the user when the user "moves" between contexts, these positions in conceptual space. 

In both physical and digital whiteboards, the scaling and placement of items is used to communicate characteristics. Items can be placed close to each other to denote a belonging to the same group. Their absolute height can communicate a relative ordering, or a numerical property. This is a capability Karta seeks to emulate in its Contexts. 

In Karta, the notion of an absolute position for a node does not exist. Positions are not stored on the nodes. They are instead stored in the edges between nodes. Each edge may contain the relative positions of both its source and its target. When in the source's context, the target is positioned according to the target position of their shared edge and when in the target's context, the source is positioned relative to the target. The position of the context's focal node is undefined and can be thought of as zero. It just needs to be placed somewhere, and the rest of the nodes are placed relative to it. 

How the data is stored bears no impact on how it is displayed or modified. Karta employs a simple force-directed algorithm that lays out the nodes such that they are close to nodes they are connected to, and repel each other so they do not overlap. Any node can be "pinned" so that they are not affected by the simulation. Nodes should not move on their own. They should be directed to move by the user, so the user does not get surprised when a node is not found where they left it. Though a formal user testing has not been conducted for Karta, several informal testings as well as the author's own usage have lead to this design decision. 

In the future, the intention is to expand on this algorithm and add manual tools to selectively simulate positions within a limited area, or add other constraint options, such as "position the connections to this node vertically below it". This is simply to ease the mental overhead of having to individually place each node in each relative space. 

Traditional list and grid views do not have this challenge, but neither do they have the benefit of being able to communicate properties through spatial arrangement. But because applications are dynamic, and the data and view are separate, Karta maintains the option to implement list and grid layouts for all those cases where a spatial graph is inconvenient, or simply not necessary. 

To give the user more control over the view, filters would be implemented as defined in section 3.3.2. These filters could be applied to show or hide parts of a context, or even to the force simulation. The user should also be given the option of flagging nodes so that they remain in view even when moving to a different context. Adding such abilities would raise the skill ceiling of using the application, but care should be taken in presenting them or to implement simplified versions so that new users would not be overwhelmed by their options[14]. 



## 4.3 - File Decomposition

This is an unimplemented feature that would, when implemented, drastically increase the capabilities and utility of the graph structure. It is decomposing individual files and representing them as collections of connected nodes right in the same interface as the general file system.

Every file can itself be treated as a tree data structure of some width and depth[?]. That tree could, in turn, be displayed as a node graph. This is especially true and relevant for project files. They contain complex hierarchies of data that assemble into a given image, animation, 3D scene, and so on. They may themselves import and reference external assets in the file system. 

The Scalable Vector Graphics (SVG) file format can be used to illustrate this feature. An SVG file consists of a hierarchy of elements, which can be vector shapes or raster images. Either of these types of images could be previewed by themselves, just like their assembled form. 

![430_owl](masters_thesis/430_owl.png)

The SVG code for the above vector image of an owl looks like the following: 

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <g id="owl-face">
    <circle cx="100" cy="100" r="90" fill="grey"/>
    <g id="eyes">
      <g id="left-eye">
        <circle cx="70" cy="80" r="30" fill="white"/>
        <circle cx="70" cy="80" r="15" fill="black"/>
      </g>
      <g id="right-eye">
        <circle cx="130" cy="80" r="30" fill="white"/>
        <circle cx="130" cy="80" r="15" fill="black"/>
      </g>
    </g>
    <g id="beak">
      <path d="M85 120 Q100 160 115 120 Z" fill="#FFD700"/>
    </g>
  </g>
</svg>
```

SVG is based on the broader XML format, where elements are listed hierarchically. Here, the circles that comprise each eye are grouped together, and both eye groups are also grouped together. The eyes are further grouped together with the beak and the head. In pure code, even to people accustomed to reading it, it takes a moment to build an understanding of the structure. A hypothetical node representation could look like this:

![430_owl_graph](masters_thesis/430_owl_graph.png)

 Implementing a generalised system for converting files to nodes would be impossible, because file types are arbitrary and new ones can be made at any time by anyone. But an architecture could be developed that would make it relatively easy to add support for specific file types. 
 
 Files that do not have support would just be displayed as single nodes. Files that do have support for decomposition could optionally be expanded into a partial or full node graph of their own, with the parts that reference external paths also connected properly to their target. 


## 4.4 - File Composition

The counterpart to decomposition is composition. If the tool is to allow breaking up of material into constituent parts, it makes sense to be able to put them together again in new configurations. The range of potential complexity for this feature is vast, from simply merging text files together, to visual programming and procedural modelling. Being able to do quick modifications to files right in the place where they are being explored introduces cognitive ease and spontaneity, since less intention and effort is needed to make those changes. As many designers could probably attest, it is not terribly convenient to have to open up Photoshop just to crop an image. Even adding only the simplest of operations for the most common file types would have great utility. 

Composition would be enabled by the introduction of a new class of node called operators. This term is familiar to users of many popular procedural node-based tools such as Houdini and TouchDesigner. Other tools that provide visual programming with nodes might use different terminology, but the concept is the same. Operators are virtual nodes that each encapsulate an operation, procedure, or function that can be performed on some type of data. Operators can be chained together to create things of incredible complexity, all of which are dynamic and non-destructive, meaning any link in the chain can be revisited and future steps will simply adapt, and work is not lost. This type of programming has grown in popularity in recent years, as users of creative software have gotten accustomed to the abstractions and see the benefits as worthy of the learning curve. 

Consider the example of cropping an image. It is a highly common operation for all types of users, not just creatives. It is also simple to conceptualise as an operator chain of just four nodes, including the starting image. The starting image is connected to the input of the crop operator, and that operator's output is connected to the input of a blank image node. Evaluating the chain produces a new image that is cropped following the specific instructions in the crop operator. 

![A procedure chain to crop an image](masters_thesis/440_crop.png)

This feature could also be implemented directly and added to an image node's context menu. But leveraging the operator abstraction has benefits, because then this operation can be made part of a longer chain of procedures, by the user themselves, and the whole chain can automatically be recalculated whenever its inputs change. 

[example of a longer chain]

If a system is to support creative processes, it should both enable composition and help the user think of what to compose[15]. A user interface that combines the intuitive, free-flowing orienteering and exploration of one's digital material with the ability to quickly and seamlessly compose parts of that material together has the potential to foster spontaneous creativity. It should be easy to copy sets of nodes to try out alternatives right next to the originals. In addition, tools should be "self-revealing" as much as possible. Just as there is a visible path from a node to its connections, there should be a visible path from a type of node output to the operators that can take it as input or vice versa. [15] Suggestions could be prompted to simply be displayed in a pop-up. 

Initially, composition should not be a heavy focus for Karta. Creative authoring tools are plenty. They are established, popular, and powerful. It is not necessary for Karta to attempt to fill those purposes. This feature was covered not as a crucial part of the software, but rather as a major aspect of the concept of it. It is a natural direction to move in for an interface designed around connecting nodes together. 

## 4.5 - Presentation 

The first prototype of Karta was created before work began on this master's thesis. It was made using the Godot Engine[15] and contained features not yet implemented in the newest prototype. Vice versa, it did not index the file system and was instead a manual note-taking tool. Both prototypes share the functionality of navigating a network using local graphs, with nodes positioned relative to each context root. It was archived due to its instability and a lacking developer experience for reliably modifying and navigating a graph database. 

The prototype's value came from the Presentation feature implemented therein. In any context, the focal node was treated as an active output. If that node was an image, it would be displayed in full scale and resolution in the background of the node graph. Attempts were made to optionally display it in a different window, but it was unfeasible to implement at the time. 

Full-screen outputs from focal nodes could open up a new form of non-linear presentation. Instead of a presented being restricted to a linear slideshow, they could travel through the associations they themselves had set, and move organically through a set of ideas, adapting at a moments notice. 



# 5 - Conclusion

Having a tight focus on the spatial metaphor for thinking and nodes as the main abstraction could help lower the threshold for learning Karta or a similar application. If users get accustomed to interacting and thinking with nodes in both simple and more complex situations, cognitive ease could be improved and maintained throughout disparate parts of the application. 

Connect back to the theoretical exploration

Answer the research questions

So, "How may a node network of a file system aid in managing the complexity of creative projects, and of a creative's total body of work?"

Additionally, the conceptualisation, design and development of Karta has been a valuable exercise in creative tool-making. This thesis could have easily been about the process and experience of creating one's own tools and the dichotomy of using existing proprietary tools versus making something crude, yet tailored exactly to one's own manner of thinking. 

# 6 - Challenges, Limitations, Future

## 6.1. - Limitations of the Thesis

This thesis presented a cursory glance into many topics that are each entire fields of research on their own and could have formed in-depth theses. Due to the focus here being on their overlap and how they lead to Karta, the overviews for each topic individually are dense and may contain simplifications for the sake of brevity. A reader interested in these topics may refer to the cited sources as starting points for their own exploration. 

It is worth noting here, briefly, the impact of artificial intelligence on this topic. What is its contribution, and what remains unaddressed by it? A thorough analysis could be a thesis on its own, so it is out of scope, but the possibility that the motivating challenge is entirely solved by use of modern AI tools must be addressed. After all, dealing with complexity is, on a surface level, what they could help with. 

There are three areas of AI that are relevant. Large language models (LLMs), image classification models, and generative models. 

LLMs, such as GPT-3 LLMs, such as GPT-3 and its successors, can generate and manipulate text based on prompts[16]. In creative contexts, they're often used for ideation, outlining, or even drafting content. However, their output lacks true understanding and often requires significant human editing and fact-checking.

Image classification models can categorize and tag visual content [17]. While useful for organizing large image datasets, they often struggle with nuanced or abstract visual concepts that are crucial in creative work.

Generative models, like DALL-E or Midjourney, can create images from text descriptions[18]. These tools can quickly generate visual concepts but often produce results that are derivative or lack the intentional nuance that human artists provide. Some additional tooling is being developed to add more control, such as image inputs or ControlNet[19] 

In the context of this thesis and the application presented at the end, AI could be useful for search and retrieval. Sometimes even for suggesting changes. Image classification models could "understand" image nodes and add labels to them, make connections under supervision. There is even precedence for node-based visual programming of image generation in the form of ComfyUI[20]. 

But giving up creative control to the whims of a statistical model is the opposite of the intention here. It is also the reason why serious creative software companies, such as SideFX with Houdini[21], have been slow to integrate generative AI in their tools. Trading away precision and intentionality for the novelty of quick image generation is not worth it for professionals. Such features are black boxes, spaces into which the creative cannot see and thus cannot exert creative control. [15]



## 6.2. - Challenges of Karta

Further development and validation of Karta's concept is of course not without possible pitfalls. For brevity and relevance, this section will omit financial and organisational challenges. It is hypothetically assumed that regular future development is guaranteed. 

Dependency management is going to be a challenge. It is not desirable that making changes in one part of a graph would have unintended consequences in a whole other part. In the event that composition becomes a more integral part of its features, Karta will need a robust tooling for managing and isolating dependencies. It should be clear to the user when a change they made has rippled out to a place that is currently not in view, and they should have the option of locking down outputs of operator chains from being automatically updated. Such a feature set would require more careful iteration and testing than the base functionality of the software did. 

## 6.3. - Future Work

The intention of the author is to continue developing Karta, to see where it goes. It is being developed out in the open, as an open-sourced project hosted on Github. The intention is to engage like-minded individuals to participate in the ongoing experimentation and development, to eventually determine whether it is a worthy long-term, serious pursuit.

With a more developed and functional application, the specific benefits and shortcomings of such a unified node graph interface could be further studied. 

Karta, as its concept currently stands, is a highly general and unspecialised system. Though it was chiefly designed from the perspective of multimedia artists and designers, its ideas could be specialised to any niche within that broad category or possibly applied to other industries. The interests of its early adopters will no doubt have influence in the direction it takes. 

The current form of the application is tailored to work for an individual, on the file system of a single computer. A natural direction would be to extend its reach to multiple computers on shared drives, such that teams of people could collaborate on shared conceptual structures. In that event, Karta's backend could be turned into a media server which could be accessed by various user interfaces by individuals[?].

Composition was presented as one of the major pillars of Karta's concept in section 4.4. It is not however a crucial feature for the actual software. 

### 4.x.1 Dependency Management

# ? - Open questions

* Should I use the term folder or directory?
* How should I reference the exact page of a reference in a longer source like a book?
* How and where should I make use of the interviews? Sprinkled throughout the entire thesis or contained within a certain chapter? 
* Do I need to have the entire interview transcripts available as attachments?
* Should there be a glossary, or will the occasional technical term be ok (such as "raster image")

## References

[1] - Tversky, B. (2019). Mind in motion: How action shapes thought. Basic Books.
[2] - Interview with an Art Director at an independent game studio
[3] - Dondis, D. A. (1973). A Primer of Visual Literacy. MIT Press
[4] - Hart, J. (2007). The Art of the Storyboard: A Filmmaker's Introduction. Focal Press.
[5] - Interview with a Senior Art Director at a mobile game company
[6] - Barbara Tversky, Julie Bauer Morrison, and Mireille Betrancourt. 2002. Animation: can it facilitate? Int. J. Hum.-Comput. Stud. 57, 4 (October 2002), 247–262.
[7] - Dinneen, Jesse & Julien, Charles-Antoine. (2021). The ubiquitous digital file: A review of file management research. 
[8] - Teevan, & Jaime, & Alvarado, & Christine, & Ackerman, & S, Mark & Karger, David & R, David. (2004). The perfect search engine is not enough: a study of orienteering behavior in directed search.
[9] - Wikipedia contributors. (2023, July 10). Wiki rabbit hole. In Wikipedia. Retrieved July 10, 2024, from https://en.wikipedia.org/wiki/Wiki_rabbit_hole
[10] - Bruineberg, Jelle & Rietveld, Erik. (2014). Self-organization, free energy minimization, and optimal grip on a field of affordances. Frontiers in Human Neuroscience.
[11] - Rust Foundation. (2023). The Rust Programming Language. Retrieved 19.7.2024, from https://www.rust-lang.org/
[12] - Bevy Foundation and Contributors. (2023). Bevy Engine. Retrieved 19.7.2024, from https://www.bevyengine.org
[13] - Agnesoft. (2023). Agnesoft Graph Database. Retrieved 19.7.2024, from https://github.com/agnesoft/agdb
[14] - Resnick, Mitchel; Myers, Brad; Nakakoji, Kumiyo; Shneiderman, Ben; Pausch, Randy; Selker, Ted; et al. (2018). Design Principles for Tools to Support Creative Thinking. Carnegie Mellon University. Journal contribution. 
[15] - Godot Foundation and Contributors. (2024). Godot Game Engine. Retrieved 19.7.2024, from https://www.godotengine.org
[16] - Brown, T. B., et al. (2020). Language Models are Few-Shot Learners.
[17] - Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. NIPS'12, 1097–1105.
[18] - Ramesh, A., et al. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents.
[19] - Illyasviel. (2023) ControlNet. https://github.com/lllyasviel/ControlNet
[20] - comfyanonymous. (2023). ComfyUI. https://github.com/comfyanonymous/ComfyUI
[21] - SideFX inc. (2024). Houdini 20.5 Keynote. [Video]. YouTube. https://youtu.be/9iOqERDE6jI?si=DYyrkB8lAYdcE2mr&t=520
