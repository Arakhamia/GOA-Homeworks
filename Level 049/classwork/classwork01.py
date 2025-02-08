# პროექტის აღწერა:
# პრობლემა: შექმენით პროგრამა, რომელიც დაამუშავებს სტუდენტების ქულების სიას და მოიძებნის მაქსიმალურ, მინიმალურ და საშუალო ქულას.

def max_min_avg(list):
    mx = max(list)

    mn = min(list)

    ag = sum(list) / len(list)

    return f"max grade is {mx}", f"min grade is {mn}", f"average grade is {ag}"

print(max_min_avg([23,26,12,89,100]))