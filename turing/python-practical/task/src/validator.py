from typing import Tuple, Dict


def validate_email_addr(email_addr: str) -> bool:
    """
    Returns True if the email_addr is valid per specification. Otherwise, returns False.
    """
    # Total length of email too long.
    if len(email_addr) > 254:
        return False

    # No domain!
    if email_addr.count('@') != 1:
        return False

    for c in email_addr:
        if not c in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.':
            return False

    return True


def validate_email_payload(sender_name: str, sender_addr: str, receiver_name: str, receiver_addr: str, html: str,
                           replacements: Dict) -> bool:
    """
    Returns True if the payload is validated and is safe to send out. Otherwise, returns False.
    """
    if len(sender_name) > 100:
        # throw new Error('valueError')
        return False

    if len(receiver_name) > 100:
        return False

    if not validate_email_addr(sender_addr):
        return False

    if not validate_email_addr(receiver_addr):
        return False

    return True
