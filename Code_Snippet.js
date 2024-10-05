uname = input("Renz Valdez");
pword = input("RenzValdez12345");
repword = input("RenzValdez12345");
if repword == pword:
  # compare the Registered Password and Re-entered Password
  # window Pop-up to Congratulate the user for registering.
  uname1 = input("RenzValdez:");
  # declare a variable that will hold the uname on Login
  password = input("RenzValdez12345:");
  # compare the registered uname and entered uname on Login
  if uname1 == uname and password == pword:
    # compare the registered pword and entered pword on Login
    print("Welcome to DSA, -", uname)
    # window Pop-up to Congratulate the user for successful Login.
  else:
    print("Incorrect Password, Re-run the code!");
    # window Pop-up to Inform the user of the incorrect passcode
else:
  print("Incorrect Username, Re-run the code!");
  # window Pop-up to Inform the user of the incorrect username
else:
  print("Password does not Match, Re-run the code!");
  # window Pop-up to Inform the regCode and re-entered pCode does not match
