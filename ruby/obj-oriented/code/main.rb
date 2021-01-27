


app_hdr = {
    sender_id: "Bob",
    receiver_id: '1456354',
    biz_msg_id: '254243',
    msg_def_id: '1324542352',
}


message = {

prty_id: 'prty_id  ',
rly_id: 'rly_id  ',
view_req: 'view_req  ',
cstmr_nb: 'cstmr_nb  ',
params: 'params  ',
global: 'global  ',
addnl_pdct_tp: 'addnl_pdct_tp ',
}

app_hdr.merge!(message)
puts app_hdr
