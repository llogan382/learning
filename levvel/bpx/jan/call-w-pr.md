## Call With Payrailz.

Monday:
- Discuss (Mastercard BPX Tech Spec v. 2.3)[https://drive.google.com/file/d/1VbjkLy0dIPbBGsDe5FE23YpaNnPEzZLm/view?usp=sharing]
    - Three endpoints - CFI RTL Confirmation, CFI Linked RFP Init, and CFI Payment Acknowldgement - found in the BPX-server gem. This will be a SOAP server setup specifically for these endpoints. All others are SERVICES, and found in this gem, initiated by the CFI (Payrailz) to interact with the Bill Payment Exchange (BPX)
    - How the CFI (Payrailz) interacts with the BPX p. 16-18

    - Look at Consumer Maintenance Request as an example, p. 23-26
    - Page 24 of the spec doc, in the diagram, EMT2004.
- Discuss Pattern in BPX-client
    - yard and doc directories
    - lib
        - Utilities have methods
        - Services has a list of all services. Look at Consumer Maintenance, and how it implements diagram from the spec doc.

        <!-- THIS IS WHERE WE STOPPED -->
        - Services.rb pulls in all classes. Look at consumer maintenance.
        - services > Mappers pulls in all files.
    - spec. Look at tests written.
    - vendor
        - bpx-services-v2 has all xsd files, envelopes. Look at consumer maintenance (EUMT003, under Common_4)
        - levvel has certs, and notes found during testing.
    - Terminal Commands to run
        - `yard doc`
        - `yard server`
        - `rspec`
- Discuss Gems Used.
    - Nokogiri
    - Savon


Call w Jim:

Google drive doc- for architecture. Will have drawings, then be added to YARD. The big pictures.

What to share w them?
Scope, and Mastercard
(scope)[https://drive.google.com/file/d/18fULi3S-WuaFR-xgjwN6SvyYMizfzqoh/view?usp=sharing]

