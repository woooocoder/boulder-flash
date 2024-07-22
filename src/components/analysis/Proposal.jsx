const Proposal = () => (
    <div className="mx-12 mb-12 bg-inherit">
      <div className="flex-col">
          <h2 className="font-bold text-5xl my-12">
            Step 1: Proposal
          </h2>
      
          <div className="mx-12">
            <p>
              Alice is new to rock climbing and keeps track of her progress using her phone.
              She documents the following for each climb:
            </p>
          
            <ol className="ml-12 my-4 list-decimal">
              <li>
                The professional rated difficulty of the climb (V0-V10)
              </li>
          
              <li>
                Her personal rating of the difficulty of the climb
              </li>
          
              <li>
                Her strategy and thoughts about the climb
              </li>
          
              <li>
                Whether she completed or failed the climb
              </li>
            </ol>
          
            <div>
                Alice finds that her notes are confusing at times, and it is tedious to try
                to match her notes to her recordings, which are stored in her camera roll. 
                The redundance of searching through her notes and matching it with a video is
                discouraging her from documenting her progress.
                She wants a way to do all of these things on her phone, and in one place. 
                Each documentation should be ordered by session.  
            </div>
          </div>
      </div>
    </div>
      
)

export default Proposal