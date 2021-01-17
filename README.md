##### By Miles Junior Coding Challenge
##### Candidate: Luis Barceló
---------------------------------

### 1. FEASIBILITY STUDY
  React, free to use other technical stacks or 3rd party libraries, 22nd Jan deadline.
  
  Achievable.

### 2. REQUIREMENT ANALYSIS
  - Use By Bits policy API.
  - Login screen. Authorization with By Bits API.
  
    Content:
      * Username input
      * Password input
      * Sign In btn

  - Policy Details screen. Displayed once authorised through Login screen. 
  
    Content:
      * Policy Reference
      * Cover type
      * Car
      * Address

### 3. DESIGN
 #### 3.1 Logical
  LoginScreen -> logIn() -> if(authorised) -> PolicyDetailsScreen

  #### 3.2 Components
  ##### LOGINSCREEN
    <LoginScreen>
      <LayoutMain>
        error ? <Error /> : null;
        <WhiteBox>
          <ContentBlock title="Sign In">
            <LoginForm />
              Input text
              Input password
              Button Sign In onClick={logIn}
          <ContentBlock />
        </WhiteBox>
      <LayoutMain />
    <LoginScreen />
    
  ##### POLICYDETAILSSCREEN
    <PolicyDetailsScreen>
      error ? <Error /> : null;
      <WhiteBox>
        <ContentBlock title="My Policy">
          <PolicyDetailsRow title="Policy Reference" content={policy_ref}/>
          <PolicyDetailsRow title="Cover Type" content={cover}/>
          <PolicyDetailsRow title="Car" content={car}/>
          <PolicyDetailsRow title="Address" content={formattedAddress}/>
        <ContentBlock />
      </WhiteBox>
    </PolicyDetailsScreen>

  #### 3.3 State
  ##### 3.3.1 Redux
    error: String || null, default: null
    authorised: Boolean, default: false
    token: String || null, default: null 
    policyDetails: Object || null, default: null

      
  ##### 3.3.2 LoginScreen
     username: String, default: ''
     password: String, default: ''
  
  #### 3.4 Physical
  ![wireframe](https://raw.githubusercontent.com/bymiles-tech/tech-challange-junior/master/tech-challange-wireframe.png)
  

### 4. CODE
See GH Repo. Unit testing should begin here.
#### 4.1 Code process (orientative)
1. React boilerplate setup (create-react-app)
1. Install dependencies (redux, react-redux, redux-thunk)
1. Install dev dependencies (tailwindcss, autoprefixer, postcss, redux-devtools-extension)
1. TailWindCSS setup
1. Redux boilerplate store setup
1. Create screen component LoginScreen. Mostly “Smart” component
1. Create components Error, WhiteBox, ContentBlock, LoginForm. Mostly “Dumb” components
1. Redux LOG_IN_SUCCESS, LOG_IN_FAIL, SET_POLICY_DETAILS, SET_ERROR
1. Create screen component PolicyDetailsScreen. Mostly “Smart” component
1. Create components PolicyDetailsRow
1. CSS Pass (TailwindCSS)

### 5. TEST
  NOTE ON UNIT TESTING: Despite having done a basic TDD tutorial, it was a while ago and I have mostly forgotten it (I even think it wasn't JS but Python or Ruby TDD). As an architect with commercial experience, I acknowledge the importance of planning ahead and preventing potential flaws, as it can mean a significant future save up in resources (time, energy, money, etc). I'm currently finishing a second version of a personal project (traderscmt.com), an opportunity I'm using for learning NextJS. Once done with it, hopefully in a few days, I'm planning to give a go to Jest.

### 6. DEPLOY
### 7. OPERATE
